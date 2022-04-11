import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  from,
  fromEvent,
  merge, Observable, Subject, takeUntil, tap
} from 'rxjs';
import { Country } from './models/vat-country.models';
import { VatBusinessLogicService } from './services/vat-business-logic.service';
import { VatCalculatorService } from './services/vat-calculator.service';

@Component({
  selector: 'vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VatCalculatorComponent implements OnInit, OnDestroy, AfterViewInit {
  selected!: Observable<Country | undefined>;
  countries!: Observable<Array<Country>>;
  formGroup!: FormGroup;

  
  private destroySignal: Subject<void>;
  
  @ViewChild('resetBtn', { read: ElementRef }) resetBtn!:ElementRef;

  constructor(
    private vatCalculatorService: VatCalculatorService,
    private vatBusinessLogicService: VatBusinessLogicService,

  ) {
    this.destroySignal = new Subject<void>();
  }
 

  async ngOnInit(): Promise<void> {
   
    this.formGroup = this.vatBusinessLogicService.getInitFormGroup();

    this.countries = this.vatCalculatorService.getSortedAscCountries();

    const selectedCountry: Observable<Country | undefined> = this.vatCalculatorService.getCountryByName(this.countries, 'Austria');

    this.selected = merge(
      selectedCountry,
      this.formGroup.get('selected')!.valueChanges
    );
    const defaultValue = {
      onlySelf: true,
      emitEvent: false,
    };
    this.vatBusinessLogicService.swichtSlideToggle(this.destroySignal, defaultValue);

    this.vatBusinessLogicService.calculateDefaultVAT(this.destroySignal, defaultValue, this.selected);
    
    this.vatBusinessLogicService.calculateNextVat(this.destroySignal, defaultValue)


  }
  
  ngAfterViewInit(): void {
    this.vatBusinessLogicService.resetForm(this.resetBtn.nativeElement, this.destroySignal);
  }
  ngOnDestroy(): void {
    if (!this.destroySignal.closed) {
      this.destroySignal.next();
    }
    this.destroySignal.unsubscribe();
  }
}

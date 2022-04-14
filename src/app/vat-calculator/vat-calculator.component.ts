
import {
  AfterViewInit, ChangeDetectionStrategy, Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Chart } from 'chart.js';
import {
  merge, Observable, Subject
} from 'rxjs';
import { VatAnimation } from './animations/vat.animate';
import { Country } from './models/vat-country.models';
import { VatBusinessLogicService } from './services/vat-business-logic.service';
import { VatCalculatorChartService } from './services/vat-calculator-chart.service';
import { VatCalculatorService } from './services/vat-calculator.service';

@Component({
  selector: 'vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [VatAnimation.errorAnimation()]
})
export class VatCalculatorComponent implements OnInit, OnDestroy, AfterViewInit {
  selected!: Observable<Country | undefined>;
  countries!: Observable<Array<Country>>;
  formGroup!: FormGroup;


  private destroySignal: Subject<void>;
  private chartWrapper!: ElementRef;

  @ViewChild('resetBtn', { read: ElementRef }) resetBtn!: ElementRef;

  @ViewChild('chartWrapper', { static: true }) set content(content: ElementRef) {
    this.chartWrapper = content;
  }

  private chart!: Chart;

  constructor(
    private vatCalculatorService: VatCalculatorService,
    private vatBusinessLogicService: VatBusinessLogicService,
    private vatCalulatorChartService: VatCalculatorChartService,
    private renderer: Renderer2

  ) {
    this.destroySignal = new Subject<void>();
  }


  ngOnInit(): void {

    this.formGroup = this.vatBusinessLogicService.getInitFormGroup();

    if (this.chartWrapper)
      this.chart = this.vatCalulatorChartService.getChart(this.renderer, this.chartWrapper);

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

    this.vatBusinessLogicService.calculateDefaultVAT(this.destroySignal, defaultValue, this.selected, this.chart);

    this.vatBusinessLogicService.calculateNextVat(this.destroySignal, defaultValue, this.chart);

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

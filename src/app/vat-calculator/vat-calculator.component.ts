import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './models/vat-country.models';
import { VatCalculatorService } from './vat-calculator.service';

@Component({
  selector: 'vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.scss'],
})
export class VatCalculatorComponent implements OnInit {
  selected!: Observable<string>;
  countries!: Observable<Array<Country>>;
  formGroup!: FormGroup;

  constructor(  private vatCalculatorService: VatCalculatorService, 
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({ selected: new FormControl('') });
    this.countries = this.vatCalculatorService
      .getNewCountries()
      .pipe(
        map((countries: Country[]) =>
          countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
        )
      );
    const selectedCountry: Observable<string> = this.countries.pipe(
      map(
        (countries: Country[]) =>
          countries.filter((c) => c.name.common == 'Austria')[0].name.common
      )
    );
    this.selected = merge(
      selectedCountry,
      this.formGroup.get('selected')!.valueChanges
    );
    /*this.selected.subscribe((current: string) =>
      console.log('currenty Selected====>', current)
    );*/
  }
}

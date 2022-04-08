import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { merge, Observable } from 'rxjs';
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

  constructor(private vatCalculatorService: VatCalculatorService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({ selected: new FormControl('') });

    this.countries = this.vatCalculatorService.getSortedAscCountries();

    const selectedCountry: Observable<string | undefined> = this.vatCalculatorService.getCountryByName(this.countries, "Austria");

    this.selected = merge(selectedCountry, this.formGroup.get('selected')!.valueChanges);

  }
}

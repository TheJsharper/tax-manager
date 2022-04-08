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
  selected!: Observable<Country | undefined>;
  countries!: Observable<Array<Country>>;
  formGroup!: FormGroup;

  constructor(private vatCalculatorService: VatCalculatorService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      selected: new FormControl(''),
      labelPosition: new FormControl(''),
      withoutVAT: new FormControl(20),
      byWithoutVAT: new FormControl(true),


      valueAddedVAT: new FormControl(20),
      byValueAddedVAT: new FormControl(true),

      priceInclVAT: new FormControl(20),
      byPriceInclVAT: new FormControl(true)

    });

    this.countries = this.vatCalculatorService.getSortedAscCountries();

    const selectedCountry: Observable<Country | undefined> = this.vatCalculatorService.getCountryByName(this.countries, "Austria");

    this.selected = merge(selectedCountry, this.formGroup.get('selected')!.valueChanges);

    const byWithoutVAT: Observable<boolean> | undefined = this.formGroup.get('byWithoutVAT')?.valueChanges;
    const byValueAddedVAT: Observable<boolean> | undefined = this.formGroup.get('byValueAddedVAT')?.valueChanges;
    const byPriceInclVAT: Observable<boolean> | undefined = this.formGroup.get('byPriceInclVAT')?.valueChanges;

    const merged = merge([byPriceInclVAT, byValueAddedVAT,byWithoutVAT])

    this.formGroup.get("labelPosition")?.valueChanges.subscribe(console.log)
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  AbstractControl,
} from '@angular/forms';
import { filter, interval, map, merge, Observable, take, tap } from 'rxjs';
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

  constructor(
    private vatCalculatorService: VatCalculatorService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      selected: new FormControl(''),
      labelPosition: new FormControl(''),
      withoutVAT: new FormControl(20),
      byWithoutVAT: new FormControl(true),

      valueAddedVAT: new FormControl(20),
      byValueAddedVAT: new FormControl(false),

      priceInclVAT: new FormControl(20),
      byPriceInclVAT: new FormControl(false),
    });

    this.countries = this.vatCalculatorService.getSortedAscCountries();

    const selectedCountry: Observable<Country | undefined> =
      this.vatCalculatorService.getCountryByName(this.countries, 'Austria');

    this.selected = merge(
      selectedCountry,
      this.formGroup.get('selected')!.valueChanges
    );
    const concurrent = 2;

    if (this.test(this.formGroup, 'byWithoutVAT')) {
      const byWithoutVATControl = this.formGroup.get('byWithoutVAT');
      if (this.test(this.formGroup, 'byValueAddedVAT')) {
        const byValueAddedVATControl = this.formGroup.get('byValueAddedVAT');

        if (this.test(this.formGroup, 'byPriceInclVAT')) {
          const byPriceInclVATControl = this.formGroup.get('byPriceInclVAT');

          const merged = merge(
            byWithoutVATControl!.valueChanges.pipe(
              map((value: boolean) => ({ name: 'byWithoutVAT', value }))
            ),
            byValueAddedVATControl!.valueChanges.pipe(
              map((value: boolean) => ({ name: 'byValueAddedVAT', value }))
            ),
            byPriceInclVATControl!.valueChanges.pipe(
              map((value: boolean) => ({ name: 'byPriceInclVAT', value }))
            )
          ).pipe(
            tap((value) => {
              console.log("TAP", value);
              const defaultValue = {
                onlySelf: true,
                emitEvent: false
            };
              if (value.name == 'byWithoutVAT' && value.name) {
                byValueAddedVATControl?.setValue(false,defaultValue);
                byPriceInclVATControl?.setValue(false, defaultValue);
              }

              if (value.name == 'byValueAddedVAT' && value.name) {
                byWithoutVATControl?.setValue(false, defaultValue);
                byPriceInclVATControl?.setValue(false,defaultValue);
              }

              if (value.name == 'byPriceInclVAT' && value.name) {
                byValueAddedVATControl?.setValue(false, defaultValue);
                byWithoutVATControl?.setValue(false, defaultValue);
              }
            })
          ).subscribe(console.log);
        }
      }
    }
  }

  private test(
    el: AbstractControl | null,
    controlName: string
  ): el is AbstractControl {
    return el?.get(controlName) !== null;
  }
}

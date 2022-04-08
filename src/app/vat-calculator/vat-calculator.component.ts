import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  combineLatest,
  concatMap,
  map,
  merge,
  mergeMap,
  Observable,
  switchMap,
  tap,
} from 'rxjs';
import { Country, TaxElement, CountryTax } from './models/vat-country.models';
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
  selectedTax!: Observable<number>;

  constructor(
    private vatCalculatorService: VatCalculatorService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      selected: new FormControl(''),
      labelPosition: new FormControl(0),
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
    this.selected.subscribe(console.log);
 /*    this.selectedTax = this.selected.pipe(
      switchMap((value) =>
        this.formGroup.get('labelPosition')!.valueChanges.pipe(
          map((vv: number) => {
            const v = value?.tax?.taxes[vv]!;
            return v.value == 0 ? 0 : v.value / 100;
          })
        )
      )
    );
    this.selectedTax=  this.formGroup.get('labelPosition')!.valueChanges.pipe(mergeMap((vv:number)=>
     this.selected.pipe(map((value)=>{
        const v = value?.tax?.taxes[vv]!;
        return v.value == 0 ? 0 : v.value / 100;
      })
    )));

    this.selectedTax=  this.formGroup.get('labelPosition')!.valueChanges.pipe(concatMap((vv:number)=>
     this.selected.pipe(map((value)=>{
        const v = value?.tax?.taxes[vv]!;
        return v.value == 0 ? 0 : v.value / 100;
      })
    )))*/
    this.formGroup
      .get('labelPosition')!
      .valueChanges.pipe(
        map((vv: number) => {
          return vv;
        })
      )
      .subscribe(console.log);
    this.selectedTax = combineLatest([
      this.formGroup.get('labelPosition')!.valueChanges,
      this.selected,
    ]).pipe(
      map((values: [number, Country | undefined]) => {
        const v = values[1]?.tax?.taxes[values[0]]!;
        return v.value == 0 ? 0 : v.value / 100;
      })
    );/**/
   this.selectedTax.subscribe((v)=>console.log("===>x",v));

    this.formGroup.get('labelPosition')?.setValue(0);
    const byWithoutVATControl = this.formGroup.get('byWithoutVAT');

    const byValueAddedVATControl = this.formGroup.get('byValueAddedVAT');

    const byPriceInclVATControl = this.formGroup.get('byPriceInclVAT');

    const defaultValue = {
      onlySelf: true,
      emitEvent: false,
    };
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
    )
      .pipe(
        tap((value) => {
          if (value.name == 'byWithoutVAT' && value.name) {
            byValueAddedVATControl?.setValue(false, defaultValue);
            byPriceInclVATControl?.setValue(false, defaultValue);
          }

          if (value.name == 'byValueAddedVAT' && value.name) {
            byWithoutVATControl?.setValue(false, defaultValue);
            byPriceInclVATControl?.setValue(false, defaultValue);
          }

          if (value.name == 'byPriceInclVAT' && value.name) {
            byValueAddedVATControl?.setValue(false, defaultValue);
            byWithoutVATControl?.setValue(false, defaultValue);
          }
        })
      )
      .subscribe(console.log);
    /*this.selectedTax = this.selected.pipe(
      
      map((value) => {
        const index: number = this.formGroup.get('labelPosition')?.value;
        return (value?.tax?.taxes.find(
          (value: TaxElement, indexEl: number) => index == indexEl)?.value
        );
      })
    );*/
  }
}

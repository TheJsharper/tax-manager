import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  combineLatest,
  concatMap,
  exhaustMap,
  first,
  firstValueFrom,
  map,
  merge,
  mergeMap,
  mergeScan,
  Observable,
  of,
  startWith,
  Subject,
  switchMap,
  take,
  takeUntil,
  tap,
  withLatestFrom,
  zip,
} from 'rxjs';
import { Country, TaxElement, CountryTax } from './models/vat-country.models';
import { VatCalculatorService } from './vat-calculator.service';

@Component({
  selector: 'vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.scss'],
  //changeDetection:ChangeDetectionStrategy.OnPush
})
export class VatCalculatorComponent implements OnInit, OnDestroy {
  selected!: Observable<Country | undefined>;
  countries!: Observable<Array<Country>>;
  formGroup!: FormGroup;
  selectedTax!: Observable<number>;

  private destroySignal: Subject<void>;

  constructor(
    private vatCalculatorService: VatCalculatorService,
    private fb: FormBuilder
  ) {
    this.destroySignal = new Subject<void>();
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      selected: new FormControl(''),
      labelPosition: new FormControl(0),
      withoutVAT: new FormControl(20),
      byWithoutVAT: new FormControl(true),

      selectedPorcentageTax: new FormControl(null),

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
    //this.selected.subscribe(console.log);

    //this.selectedTax.subscribe((v) => console.log('===>x', v));

    const byWithoutVATControl = this.formGroup.get('byWithoutVAT');
    const withoutVATControl = this.formGroup.get('withoutVAT');

    const byValueAddedVATControl = this.formGroup.get('byValueAddedVAT');
    const valueAddedVATControl = this.formGroup.get('valueAddedVAT');

    const byPriceInclVATControl = this.formGroup.get('byPriceInclVAT');
    const priceInclVATControl = this.formGroup.get('priceInclVAT');

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
        takeUntil(this.destroySignal),
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

      const sel= this.selected
      .pipe(
        mergeMap((country: Country | undefined) => {
         return   this.formGroup.get("labelPosition")!.valueChanges.pipe(map((value:number)=>({name:"labelPosition",value}))).pipe(map((values:{name:string, value:number})=>{
            if(values.name=="labelPosition" && country?.tax && country.tax.taxes.length>0){
              const porcentage:number =country?.tax?.taxes[values.value].value!;
              const v = porcentage/100;
              return {...values, value:v};
            }else{
              return {...values, value:0};
            }
          }))
        }),
        tap((values:{name:string, value:number})=>{
          this.formGroup.get("selectedPorcentageTax")?.setValue(values.value);
        })
      )

    const mergedInputs: Observable<{ name: string; value: number }> = merge(
      withoutVATControl!.valueChanges.pipe(
        map((value: number) => ({ name: 'withoutVAT', value }))
      ),
      valueAddedVATControl!.valueChanges.pipe(
        map((value: number) => ({ name: 'valueAddedVAT', value }))
      ),

      priceInclVATControl!.valueChanges.pipe(
        map((value: number) => ({ name: 'priceInclVAT', value }))
      )
      //this.formGroup.get("labelPosition")!.valueChanges.pipe(map((value:number)=>({name:"labelPosition",value})))
    );
   
    
     
  sel.pipe(mergeMap((v:{name:string, value:number}) => {
        return mergedInputs.pipe(
         
          tap((values: { name: string; value: number }) => {
            let vatInPorcentage:number | undefined;
            if(values.name ="labelPosition"){
              vatInPorcentage = values.value;
            }
            if (values.name == 'withoutVAT' && values.value && vatInPorcentage) {
              
                const vatToPay:number = parseFloat((values.value * vatInPorcentage).toFixed(2));
                valueAddedVATControl?.setValue(vatToPay, defaultValue);
                priceInclVATControl?.setValue(parseFloat((vatToPay + values.value).toFixed(2)), defaultValue);
                
                
              }else if(values.name == 'withoutVAT' && !values.value){
                
                valueAddedVATControl?.setValue(null, defaultValue);
                priceInclVATControl?.setValue(null, defaultValue);
                
            }
            if (values.name == 'valueAddedVAT' && values.value && values.value !=0 &&  vatInPorcentage) {
              const addedVat:number =parseFloat(values.value.toFixed(2));
             
                const WithoutAVATTOPay:number = parseFloat((addedVat / vatInPorcentage).toFixed(2));
                withoutVATControl?.setValue(WithoutAVATTOPay, defaultValue);
                priceInclVATControl?.setValue( addedVat + WithoutAVATTOPay, defaultValue );
              
            }else if(values.name == 'valueAddedVAT' && (!values.value || values.value ==0)){
              withoutVATControl?.setValue(null, defaultValue);
                priceInclVATControl?.setValue(null,  defaultValue   );
            }
            if (values.name == 'priceInclVAT' && values.value &&  vatInPorcentage) {
              const total:number = parseFloat(values.value.toFixed(2));
              const valueAdded:number = parseFloat((total * vatInPorcentage).toFixed(2));
              valueAddedVATControl?.setValue(valueAdded, defaultValue);
              withoutVATControl?.setValue(parseFloat((total-valueAdded).toFixed(2)), defaultValue);
            }else if(values.name == 'priceInclVAT' && !values.value){
              valueAddedVATControl?.setValue(null, defaultValue);
              withoutVATControl?.setValue(null, defaultValue);
            }
          })
        );
      })).subscribe();

    
  }

  ngOnDestroy(): void {
    if (!this.destroySignal.closed) {
      this.destroySignal.next();
    }
    this.destroySignal.unsubscribe();
  }
}

import { Injectable } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { fromEvent, map, merge, Observable, Subject, takeUntil, tap, withLatestFrom } from "rxjs";
import { Country } from "../models/vat-country.models";

@Injectable()
export class VatBusinessLogicService {


    private controls!: Map<string, AbstractControl>;
    constructor(private fb: FormBuilder) { }
    public getInitFormGroup(): FormGroup {
        const formGroup: FormGroup = this.fb.group({
            selected: new FormControl(''),
            labelPosition: new FormControl(),
            withoutVAT: new FormControl(),
            byWithoutVAT: new FormControl(true),

            selectedPorcentageTax: new FormControl(null),

            valueAddedVAT: new FormControl(),
            byValueAddedVAT: new FormControl(false),

            priceInclVAT: new FormControl(),
            byPriceInclVAT: new FormControl(false),

            paidInPorcentage: new FormControl()
        });
        this.controls = new Map<string, AbstractControl>(Object.entries(formGroup.controls));
        return formGroup;
    }
    public swichtSlideToggle(destroySignal: Subject<void>, defaultValue: {
        onlySelf: boolean,
        emitEvent: boolean,
    }): void {
        const byWithoutVATControl = this.controls.get('byWithoutVAT')!;

        const byValueAddedVATControl = this.controls.get('byValueAddedVAT')!;

        const byPriceInclVATControl = this.controls.get('byPriceInclVAT')!;
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
                takeUntil(destroySignal),
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

    }

    public calculateDefaultVAT(destroySignal: Subject<void>, defaultValue: {
        onlySelf: boolean,
        emitEvent: boolean,
    }, selected: Observable<Country | undefined>): void {


        this.controls.get("labelPosition")!.valueChanges.pipe(
            map<any, { name: string, value: number }>((value: number) => ({ name: "labelPosition", value })))
            .pipe(
                takeUntil(destroySignal),
                withLatestFrom(selected),
                map((values) => {
                    if (values[0].name == "labelPosition" && values[1]?.tax && values[1].tax.taxes.length > 0) {
                        const porcentage: number = values[1].tax?.taxes[values[0].value].value!;
                        const v = porcentage / 100;
                        return { name: values[0].name, value: v };
                    } else {
                        return { name: values[0].name, value: 0 };
                    }
                }),
                tap((values: { name: string, value: number }) => {
                    this.controls.get("selectedPorcentageTax")?.setValue(values.value);
                    const porcentage: number = values.value;
                    const currentValue: number = this.controls.get("withoutVAT")?.value;
                    if (currentValue) {
                        const vatToPay: number = parseFloat((currentValue * porcentage).toFixed(2));
                        this.controls.get('valueAddedVAT')?.setValue(vatToPay, defaultValue);
                        this.controls.get('priceInclVAT')?.setValue(parseFloat((vatToPay + currentValue).toFixed(2)), defaultValue);
                        this.controls.get('paidInPorcentage')?.setValue(parseFloat((vatToPay / currentValue).toFixed(2)), defaultValue);
                    }

                })
            ).subscribe();
    }

    private getMergeInouts(): Observable<{ name: string; value: number }> {

        const mergedInputs: Observable<{ name: string; value: number }> = merge(
            this.controls.get('withoutVAT')!.valueChanges.pipe(
                map((value: number) => ({ name: 'withoutVAT', value }))
            ),
            this.controls.get('valueAddedVAT')!.valueChanges.pipe(
                map((value: number) => ({ name: 'valueAddedVAT', value }))
            ),

            this.controls.get('priceInclVAT')!.valueChanges.pipe(
                map((value: number) => ({ name: 'priceInclVAT', value }))
            )

        );
        return mergedInputs;
    }
    public calculateNextVat(destroySignal: Subject<void>, defaultValue: {
        onlySelf: boolean,
        emitEvent: boolean,
    }): void {
        const mergedInputs = this.getMergeInouts();
        const withoutVATControl = this.controls.get('withoutVAT');

        const valueAddedVATControl = this.controls.get('valueAddedVAT');

        const priceInclVATControl = this.controls.get('priceInclVAT');

        const paidInPorcentageControl = this.controls.get('paidInPorcentage');
        mergedInputs.pipe(
            takeUntil(destroySignal),
            tap((values: { name: string; value: number }) => {
                const vatInPorcentage: number = +this.controls.get("selectedPorcentageTax")!.value;

                if (values.name == 'withoutVAT' && values.value && values.value != 0) {

                    const vatToPay: number = parseFloat((values.value * vatInPorcentage).toFixed(2));
                    const totalPrice: number = parseFloat((vatToPay + values.value).toFixed(2));

                    valueAddedVATControl?.setValue(vatToPay, defaultValue);
                    priceInclVATControl?.setValue(totalPrice, defaultValue);
                    paidInPorcentageControl?.setValue(parseFloat((vatToPay / totalPrice).toFixed(2)), defaultValue);


                } else if (values.name == 'withoutVAT' && (!values.value || values.value == 0)) {

                    valueAddedVATControl?.setValue(null, defaultValue);
                    priceInclVATControl?.setValue(null, defaultValue);
                    paidInPorcentageControl?.setValue(null, defaultValue);

                }
                if (values.name == 'valueAddedVAT' && values.value && values.value != 0) {
                    const addedVat: number = parseFloat(values.value.toFixed(2));

                    const WithoutAVATTOPay: number = parseFloat((addedVat / vatInPorcentage).toFixed(2));
                    const totalPrice: number = addedVat + WithoutAVATTOPay;

                    withoutVATControl?.setValue(WithoutAVATTOPay, defaultValue);
                    priceInclVATControl?.setValue(totalPrice, defaultValue);
                    paidInPorcentageControl?.setValue(parseFloat((addedVat / totalPrice).toFixed(2)), defaultValue);

                } else if (values.name == 'valueAddedVAT' && (!values.value || values.value == 0)) {
                    withoutVATControl?.setValue(null, defaultValue);
                    priceInclVATControl?.setValue(null, defaultValue);
                    paidInPorcentageControl?.setValue(null, defaultValue);
                }
                if (values.name == 'priceInclVAT' && values.value && values.value != 0) {
                    const total: number = parseFloat(values.value.toFixed(2));
                    const valueAdded: number = parseFloat((total * vatInPorcentage).toFixed(2));

                    valueAddedVATControl?.setValue(valueAdded, defaultValue);
                    withoutVATControl?.setValue(parseFloat((total - valueAdded).toFixed(2)), defaultValue);
                    paidInPorcentageControl?.setValue(parseFloat((valueAdded / total).toFixed(2)), defaultValue);

                } else if (values.name == 'priceInclVAT' && (!values.value || values.value == 0)) {
                    valueAddedVATControl?.setValue(null, defaultValue);
                    withoutVATControl?.setValue(null, defaultValue);
                    paidInPorcentageControl?.setValue(null, defaultValue);
                }
            })
        ).subscribe()

    }
  public resetForm(nativeElement: any, destroySignal: Subject<void>) {
        fromEvent(nativeElement, "click").pipe(
            takeUntil(destroySignal),
            tap(() =>
                Array.from(this.controls.entries())
                    .filter((values: [string, AbstractControl]) => values[0] != "select" && !values[0].startsWith("by"))
                    .map((values: [string, AbstractControl]) => values[1].reset(null, {
                        onlySelf: true,
                        emitEvent: false,
                    }))
            )).subscribe();
    }
}
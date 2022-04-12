import { AbstractControl, ValidationErrors } from "@angular/forms";

export class VatValidators {

    static isNotPorcentageChoosen(controls: AbstractControl): ValidationErrors | null {
        const withoutVAT = controls.get('withoutVAT');
        const valueAddedVAT = controls.get('valueAddedVAT');
        const byPriceInclVAT = controls.get('byPriceInclVAT');
        const selected = controls.get('labelPosition');

        return (withoutVAT?.dirty || valueAddedVAT?.dirty || byPriceInclVAT?.dirty) && selected?.pristine ? { isNotPorcentageChoosen: true } : null

    }
}
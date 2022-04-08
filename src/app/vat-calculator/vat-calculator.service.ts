import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    Country
} from './models/vat-country.models';


@Injectable()
export class VatCalculatorService {
    constructor(private httpClient: HttpClient) { }

    public getNewCountries(): Observable<Array<Country>> {
        return this.httpClient.get<Array<Country>>("/assets/output/taxed-all-countries.json");
    }
}



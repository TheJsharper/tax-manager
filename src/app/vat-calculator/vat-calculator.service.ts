import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
    Country,
    /*Region,
    Side,
    StartOfWeek,
    Status,*/
} from './models/vat-country.models2';
//import { Tax, taxes, getAllCountryTaxes } from './models/taxation';

import { HttpClient } from "@angular/common/http";

@Injectable()
export class VatCalculatorService {
    constructor(private httpClient: HttpClient) { }

    public getNewCountries(): Observable<Array<Country>> {
        return this.httpClient.get<Array<Country>>("/assets/output/taxed-all-countries.json");
    }
}



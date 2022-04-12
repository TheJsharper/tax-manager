import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Country, sortDirection } from '../models/vat-country.models';



@Injectable()
export class VatCalculatorService {
    constructor(private httpClient: HttpClient) { 
       
    }

    public getSortedAscCountries(): Observable<Array<Country>> {
        const countries$: Observable<Array<Country>> = this.httpClient.get<Array<Country>>("/assets/output/taxed-all-countries.json");
        return this.getSortedCountries(countries$, sortDirection.ASC);
    }

    public getSortedDescCountries(): Observable<Array<Country>> {
        const countries$: Observable<Array<Country>> = this.httpClient.get<Array<Country>>("/assets/output/taxed-all-countries.json");
        return this.getSortedCountries(countries$, sortDirection.DESC);
    }

    private getSortedCountries(countries$: Observable<Array<Country>>, sortDir: sortDirection): Observable<Array<Country>> {
        return countries$
            .pipe(
                map((countries: Country[]) =>
                    countries.sort((a: Country, b: Country) => sortDir == sortDirection.ASC ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common))
                )
            );
    }
    public getCountryByName(countries$: Observable<Array<Country>>, countryName: string): Observable<Country | undefined> {
        return countries$.pipe(
            map(
                (countries: Country[]) => {
                    const country: Country | undefined = countries.find((c) => c.name.common.toLowerCase() == countryName.toLowerCase());
                    if (country) {
                        return country;

                    } else {
                        return countries.length > 0 ? countries[0] : undefined;
                    }
                }
            )
        );
    }
}



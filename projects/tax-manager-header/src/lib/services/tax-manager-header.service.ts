import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class TaxManagerHeaderService {
    private _settings: Subject<Info>;

    get settings(): Subject<Info> {
        return this._settings;
    }

    constructor() {
        this._settings = new Subject<Info>();
    }
}

export interface Info {
    name: string;

}
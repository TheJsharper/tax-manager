import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class TaxManagerHeaderService {
    private _settings: Subject<Info> = new Subject<Info>();

    get settings(): Subject<Info> {
        return this._settings;
    }


    private _title!: string;
    public get title(): string {
        return this._title;
    }
    public set title(v: string) {
        this._title = v;
    }


    constructor() {
        //this._settings = new Subject<Info>();
        this._settings.subscribe(console.log)
    }
}

export interface Info {
    name: string;

}
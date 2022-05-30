import { Info, TaxManagerHeaderService } from '@tax-manager/shared';
import { Component, OnInit } from "@angular/core";
import { Subject } from 'rxjs';

@Component({
    selector: 'tax-manager-header',
    templateUrl: './tax-manager-header.component.html',
    styleUrls: ['./tax-manager-header.component.scss'],
})
export class TaxManagerHeaderComponent implements OnInit {
    settings!: Subject<Info>;
    title!:string;

    constructor(private taxManagerHeaderService: TaxManagerHeaderService) {
    }
    ngOnInit(): void {
        this.settings = this.taxManagerHeaderService.settings;
        this.title = this.taxManagerHeaderService.title;
    }
}
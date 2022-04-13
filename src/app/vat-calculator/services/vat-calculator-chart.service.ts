import { Injectable } from "@angular/core";
import { Chart, ChartConfiguration, registerables } from "chart.js";

@Injectable()

export class VatCalculatorChartService {
   
    constructor() {
        Chart.register(...registerables);
     }

    getChart(): ChartConfiguration {

        const data = {
            labels: ['VAT', 'Tax'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [40, 60],
                    backgroundColor: ['red', "blue"] 
                }
            ]
        };
        const config: ChartConfiguration = {
            type: 'pie',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Porcentage VAT'
                    }
                }
            },
        };

     
        return config;
    }
}
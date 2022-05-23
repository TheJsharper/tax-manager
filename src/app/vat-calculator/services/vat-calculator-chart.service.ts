import { ElementRef, Injectable, Renderer2 } from "@angular/core";
import { Chart, ChartConfiguration, registerables } from "chart.js";

@Injectable()

export class VatCalculatorChartService {

    constructor() {
        Chart.register(...registerables);
    }

    private getConfigChart(): ChartConfiguration {

        const data = {
            labels: ['VAT', 'Tax'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [60, 40],
                    backgroundColor: ['#673ab7', "rgba(145,109,209,0.5)"]
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
    getChart(renderer: Renderer2, chartWrapper: ElementRef): Chart {
        const config = this.getConfigChart();

        const el: HTMLCanvasElement = renderer.createElement("canvas");

        const chart: Chart = new Chart(el.getContext("2d")!, config);

     

        renderer.appendChild(chartWrapper.nativeElement, el);

        return chart;
    }
}
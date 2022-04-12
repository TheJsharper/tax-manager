import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Chart, ChartConfiguration } from "chart.js";

@Injectable()

export class VatCalculatorChartService {
    private renderer: Renderer2;
    constructor( rendererFactory: RendererFactory2) {
        this.renderer =  rendererFactory.createRenderer(null, null);
     }

    getChart(): Chart {

        const data = {
            labels: ['Red', 'Orange'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [40, 60],
                    backgroundColor: ['black', "white"] // Object.values(Utils.CHART_COLORS),
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
                        text: 'Chart.js Pie Chart'
                    }
                }
            },
        };

        const el: HTMLCanvasElement = this.renderer.createElement("canvas");
        const ctx = el.getContext('2d')!;
        const chart: Chart = new Chart(ctx, config);
        return chart;
    }
}
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as Highcharts from "highcharts/highstock";


declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
let HStockTools  = require('highcharts/modules/stock-tools')
Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
HStockTools(Highcharts); 

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class StockChartComponent implements OnInit {

  
  public options: any = {
    chart: {
      type: 'scatter',
      height: 700
    },
    title: {
      text: 'Sample Scatter Plot'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      
    },
    xAxis: {
      type: 'datetime',
      
    },
    series: [
      {
        name: 'Normal',
        turboThreshold: 500000,
        data: [[new Date('2018-01-25 18:38:31').getTime(), 2]]
      },
      {
        name: 'Abnormal',
        turboThreshold: 500000,
        data: [[new Date('2018-02-05 18:38:31').getTime(), 7]]
      }
    ]
  }
  constructor() { }

  ngOnInit(){
   
    Highcharts.stockChart('container', this.options);
  }

}

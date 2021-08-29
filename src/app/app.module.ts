import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { ResuableComponentComponent } from './components/resuable-component/resuable-component.component';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatSliderModule],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA],
  entryComponents: [ResuableComponentComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  
  }
  ngDoBootstrap() {
    const el = createCustomElement(ResuableComponentComponent, { injector:this.injector });
    customElements.define('reusable-component2', el);
  }
}
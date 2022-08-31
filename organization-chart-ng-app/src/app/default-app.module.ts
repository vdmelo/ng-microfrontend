import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartComponent } from './main/chart/chart.component';
import { PanelComponent } from './main/panel/panel.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const DECLARATIONS = [
  AppComponent,
  ChartComponent,
  PanelComponent
];

export const IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,
  MatSliderModule
];

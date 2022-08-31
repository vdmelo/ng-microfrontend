import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChartComponent } from "./chart/chart.component";
import { PanelComponent } from "./panel/panel.component";

export const MAIN_ROUTES: Routes = [
  { path: '', component: ChartComponent },
  { path: 'panel', component: PanelComponent }
];

@NgModule({
    imports: [RouterModule.forChild(MAIN_ROUTES)],
    exports: [RouterModule]
  })
  export class RemoteAppRoutingModule { }
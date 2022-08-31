import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


export const APP_ROUTES: Routes = [
    { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DECLARATIONS, IMPORTS } from './default-app.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations:[
    AppComponent
  ],
  imports: [
    MainModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

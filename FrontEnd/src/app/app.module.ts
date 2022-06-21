import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { MapComponentComponent } from './map-component/map-component.component';
import { InfoBoxComponentComponent } from './info-box-component/info-box-component.component';
import { ScoreComponentComponent } from './score-component/score-component.component';
import { CoordinateComponentComponent } from './coordinate-component/coordinate-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    InfoBoxComponentComponent,
    ScoreComponentComponent,
    CoordinateComponentComponent,
    MapComponentComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

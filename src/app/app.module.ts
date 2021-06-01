import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChronoComponent } from './components/chrono/chrono.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'chrono', component: ChronoComponent },
];

@NgModule({
  declarations: [AppComponent, ChronoComponent, WeatherComponent, HeaderComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

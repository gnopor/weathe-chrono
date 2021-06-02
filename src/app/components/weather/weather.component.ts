import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { Weather } from '../../interfaces';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weather?: Weather;
  query: string = '';

  api = {
    key: 'fee4be8a8db8e91a9648903da6233e98',
    base: 'https://api.openweathermap.org/data/2.5',
  };

  constructor(private http: HttpClient, private uiService: UiService) {}

  //
  // ==> methods
  //
  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    const url: string = 'https://ipapi.co/json/';
    this.http.get(url).subscribe((res: any) => {
      this.fetchWeather(res.city);
    });
  }

  fetchWeather(query: string = '') {
    const url: string = `${this.api.base}/weather?q=${query}&units=metric&APPID=${this.api.key}`;
    this.http
      .get(url)
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(false);
        })
      )
      .subscribe((res: any) => {
        if (res) {
          const weather: Weather = {
            town: res.name,
            country: res.sys.country,
            temperature: res.main.temp,
            description: res.weather[0].main,
          };

          this.weather = weather;
          this.uiService.updateBgImg(+weather.temperature);
        }
      });
  }

  onInput(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.fetchWeather(this.query);
      this.query = '';
    }
  }

  formatDate(date: Date = new Date()): string {
    let months = [
      'January',
      'Febuary',
      'March',
      'April',
      'May',
      'June',
      'Jully',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let month_day = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    return `${month_day}, ${day} ${month} ${year}`;
  }
}

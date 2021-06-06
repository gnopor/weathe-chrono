import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.css'],
})
export class ChronoComponent implements OnInit {
  minute: number = 0;
  second: number = 0;
  tierce: number = 0;
  button_text: string = 'Start';
  one_tierce: number = 1000 / 60; // 1/60 seconde
  interval?: any;
  time_counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onAction(event: Event) {
    const button = event.target as HTMLButtonElement;
    if (button.innerText.toLowerCase() == 'start') {
      this.button_text = 'Stop';
      button.classList.add('stop');

      this.time_counter = 0;
      this.minute = 0;
      this.second = 0;
      this.tierce = 0;

      this.interval = setInterval(() => {
        this.formatTimeValues(this.time_counter);
        this.time_counter++;
      }, this.one_tierce);
    } else {
      this.button_text = 'Start';
      button.classList.remove('stop');
      clearInterval(this.interval);
    }
  }

  formatTimeValues(tierces: number) {
    this.tierce = tierces % 60;

    // second
    if (this.tierce == 59) {
      this.second++;
    }

    // minute
    if (this.second == 59) {
      this.second = 0;
      this.minute++;
    }
  }

  formatValue(value: number): string {
    return value.toString().length == 1 ? `0${value}` : `${value}`;
  }
}

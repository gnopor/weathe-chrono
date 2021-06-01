import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  image_cold = 'assets/images/test.png';
  bg_image = this.image_cold;

  constructor() {}

  getBgURL(image_name: string): string {
    return `url(${image_name})`;
  }
}

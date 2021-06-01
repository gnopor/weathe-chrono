import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  image_cold = 'assets/images/test.png';
  bg_image = this.image_cold;

  constructor() {}

  getBgURL(image_name: string): string {
    return `url(${image_name})`;
  }
}

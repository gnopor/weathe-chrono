import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  image_cold = 'assets/images/cold-bg.jpg';
  image_hot = 'assets/images/warm-bg.jpg';
  bg_image = this.image_cold;

  constructor() {}

  getBgURL(image_name: string): string {
    return `url(${image_name})`;
  }
}

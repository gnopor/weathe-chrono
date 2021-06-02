import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  image_cold = 'assets/images/cold-bg.jpg';
  image_hot = 'assets/images/warm-bg.jpg';
  bg_image = this.image_cold;
  private subject = new Subject<any>();

  constructor() {}

  getBgURL(image_name: string): string {
    return `url(${image_name})`;
  }

  updateBgImg(temperature: number) {
    this.bg_image = temperature > 20 ? this.image_hot : this.image_cold;
    this.subject.next(this.bg_image);
  }

  onBgChange(): Observable<any> {
    return this.subject.asObservable();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.css'],
})
export class BgComponent implements OnInit {
  bg_image: string = '';

  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.bg_image = this.uiService.bg_image;
  }

  getBgURL(image_name: string): string {
    return this.uiService.getBgURL(image_name);
  }
}

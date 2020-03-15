import { Component } from '@angular/core';
import { IconService } from './icon.service';

@Component({
  selector: 'taikido-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private iconService: IconService) {
    this.iconService.registerIcons();
  }
}

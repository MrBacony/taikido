import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  icons: { name: string, url: string }[] = [
    {name: 'facebook', url: 'assets/icons/facebook.svg'}
  ];

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
  }

  registerIcons() {
    this.icons.forEach((icon) => {
      this.iconRegistry.addSvgIcon(icon.name, this.sanitizer.bypassSecurityTrustResourceUrl(icon.url));
    });
  }
}

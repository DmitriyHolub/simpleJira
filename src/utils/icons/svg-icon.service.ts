import { APP_BASE_HREF } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { DEFAULT_ICON_CONFIG, IconConfig } from './icon-config';

@Injectable({
  providedIn: 'root'
})
export class SvgIconService {
  constructor(
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
    @Inject(APP_BASE_HREF) private _baseHref: string
  ) {}

  public initialise(
    iconConfig?: Record<string, IconConfig>,
    baseHref?: string
  ): void {
    iconConfig = iconConfig ?? DEFAULT_ICON_CONFIG;
    baseHref = baseHref ?? this._baseHref;

    const keys = Object.keys(iconConfig);
    const len = keys.length;

    for (let i = 0; i < len; i++) {
      const key = keys[i];
      const obj: IconConfig = iconConfig[key];
      if (obj.svgString) {
        this._iconRegistry.addSvgIconLiteralInNamespace(
          'simpleJira',
          key,
          this._sanitizer.bypassSecurityTrustHtml(obj.svgString)
        );
      } else if (obj.path) {
        this._iconRegistry.addSvgIconInNamespace(
          'simpleJira',
          key,
          this._sanitizer.bypassSecurityTrustResourceUrl(
            `${baseHref}${obj.path}`
          )
        );
      }
    }
  }
}

import { PlatformLocation } from '@angular/common';

export function getBaseHrefFactory(platformLocation: PlatformLocation): string {
  let baseHref = platformLocation.getBaseHrefFromDOM();
  if (baseHref[baseHref.length - 1] === '/') {
    baseHref = baseHref.substring(0, baseHref.length - 1);
  }
  return baseHref;
}


import { InjectionToken } from '@angular/core';

export interface EnvironmentConfig {
  [key: string]: any;
}

export const ENVIRONMENT = new InjectionToken('ENVIRONMENT');

export interface Environment {
  production: boolean;
  logErrorsToConsole: boolean;
  iosAppDownloadUrl: string;
  androidAppDownloadUrl: string;
  appUrl: string;
  version: string;
  releaseVersion: string;
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public showSideNavSubject = new Subject<boolean>();
  isDisplayed = false;
  constructor() { }

  toggle(): void {
    this.isDisplayed = !this.isDisplayed;
    this.showSideNavSubject.next(this.isDisplayed);
  }

}

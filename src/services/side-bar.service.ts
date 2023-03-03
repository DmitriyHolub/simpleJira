import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  public sidebarMenu$ = new Subject<boolean>();

  constructor() { }

  public sideBarExpandEvent(isSidebarMenuExpanded: boolean){
    this.sidebarMenu$.next(isSidebarMenuExpanded);
  }
}

import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class BaseComponent implements OnDestroy {

  protected _componentDestroy$ = new Subject<void>();

  constructor() { }
  ngOnDestroy(): void {
    this._componentDestroy$.next();
    this._componentDestroy$.complete()
  }

}

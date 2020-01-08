import { Component, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LazyElementConfig } from '@lowcodeunit/lazy-element';

export class SharedElementState {
  public Element: LazyElementConfig;
}

export class SharedElementContext extends LCUElementContext<SharedElementState> {}

export const SELECTOR_SHARED_ELEMENT = 'lcu-shared-element';

@Component({
  selector: SELECTOR_SHARED_ELEMENT,
  templateUrl: './shared-element.component.html',
  styleUrls: ['./shared-element.component.scss']
})
export class SharedElementComponent extends LcuElementComponent<SharedElementContext> {
  //  Fields

  //  Properties
  public get Active(): LazyElementConfig {
    return null;
    // return this.pgSvc.PointersConfig && this.pgSvc.PointersConfig.Pointers ?
    //  this.pgSvc.PointersConfig.Pointers[this.Element.Pointer] : null;
  }

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  // 	Life Cycle

  // 	API Methods

  // 	Helpers
}

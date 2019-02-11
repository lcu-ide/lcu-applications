import { Component, Injector } from '@angular/core';
import { LazyElementConfig } from '@lowcodeunit/lazy-element';
import { LcuElementComponent } from '../../lcu-element.component';

export class SharedElementState {
  public Element: LazyElementConfig;
}

export class SharedElementContext {
  public State: SharedElementState;
}

@Component({
  selector: 'lcu-shared-element',
  templateUrl: './shared-element.component.html',
  styleUrls: ['./shared-element.component.scss']
})
export class SharedElementComponent  extends LcuElementComponent<SharedElementContext> {
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

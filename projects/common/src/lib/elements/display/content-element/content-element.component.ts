import { Component, OnInit, Input, Injector, OnChanges } from '@angular/core';
import { LcuElementComponent, LCUElementContext } from '@lcu/common';

export class ContentElementState {
  public Class?: string;

  public Content: string;

  public Modifier?: string;

  public Type: string;
}

//  TODO:  Need to do this base extension for everything
export class ContentElementContext extends LCUElementContext<ContentElementState> {}

export const SELECTOR_CONTENT_ELEMENT = 'lcu-content-element';

@Component({
  selector: SELECTOR_CONTENT_ELEMENT,
  templateUrl: './content-element.component.html',
  styleUrls: ['./content-element.component.scss']
})
export class ContentElementComponent extends LcuElementComponent<ContentElementContext> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
}

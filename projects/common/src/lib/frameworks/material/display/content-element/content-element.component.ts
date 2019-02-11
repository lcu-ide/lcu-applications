import { Component, OnInit, Input, Injector, OnChanges } from '@angular/core';
import { LcuElementComponent } from '../../lcu-element.component';

export class ContentElementState {
  public Class?: string;

  public Content: string;

  public Modifier?: string;

  public Type: string;
}

export class ContentElementContext {
  public State: ContentElementState;
}

export const SELECTOR_CONTENT_ELEMENT = 'lcu-content-element';

@Component({
  selector: SELECTOR_CONTENT_ELEMENT,
  templateUrl: './content-element.component.html',
  styleUrls: ['./content-element.component.scss']
})
export class ContentElementComponent extends LcuElementComponent<ContentElementContext> implements OnChanges, OnInit {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnChanges() {
    console.log(this.Context);
  }

  public ngOnInit() {
    super.ngOnInit();

    console.log(this.Context);
  }
}

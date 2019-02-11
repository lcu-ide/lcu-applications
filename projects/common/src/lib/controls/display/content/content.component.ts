import { Component, OnChanges, Input, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lcu-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnChanges {
  //  Fields

  //  Properties
  @Input('content-class')
  public Class: string;

  @Input('content')
  public Content: string;

  @Input('modifier')
  public Modifier: string;

  @Input('source-based-types')
  public SourceBasedTypes: string[];

  @Input('type')
  public Type: string;

  //  Constructors
  constructor(protected elRef: ElementRef) {
    this.SourceBasedTypes = ['img', 'iframe'];
  }

  //  Life Cycle
  public ngOnChanges(_: SimpleChanges) {
    this.controlChanged();
  }

  //  API Methods

  //  Helpers
  protected controlChanged() {
    if (this.Type) {
      let content = '';

      if (!this.isSourceBased(this.Type)) {
        content = `<${this.Type} ${this.Modifier || ''} class="${this.Class || ''}">${this.Content || ''}</${this.Type}>`;
      } else {
        content = `<${this.Type} ${this.Modifier || ''} class="${this.Class || ''}" src="${this.Content || ''}"></${this.Type}>`;
      }

      this.elRef.nativeElement.innerHTML = content;
    }
  }

  protected isSourceBased(type: string) {
    return this.SourceBasedTypes && this.SourceBasedTypes.indexOf(type) >= 0;
  }
}

import { Component, OnInit, Input, Injector } from '@angular/core';
import { CONTEXT } from '@angular/core/src/render3/interfaces/view';

export abstract class LcuElementComponent<T> implements OnInit {
  //  Properties
  @Input('context')
  public context: T; //  TODO: WOuld be ideal if this was only caps...
  public get Context(): T {
    return this.context;
  }

  //  Constructors
  constructor(protected injector: Injector) {}

  //  Life Cycle
  public ngOnInit() {}
}

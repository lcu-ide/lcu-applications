import { Component, OnInit } from '@angular/core';
import { ContentElementContext } from '@lcu-ide/lcu-applications-common';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //  Properties
  public Contexts: ContentElementContext[];

  //  Constructors
  constructor() {
    this.Contexts = [];
  }

  //  Life Cycle
  public ngOnInit() {
    this.Contexts.push({
      State: {
        Content: 'Hello World',
        Type: 'h1',
        Class: 'this-world'
      }
    });

    this.Contexts.push({
      State: {
        Content: 'http://fathym.com',
        Type: 'iframe',
        Class: 'that-world',
        Modifier: `frameborder="0"`
      }
    });
  }
}

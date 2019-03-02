import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsManagerElementComponent } from './apps-manager-element.component';

describe('AppsManagerElementComponent', () => {
  let component: AppsManagerElementComponent;
  let fixture: ComponentFixture<AppsManagerElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsManagerElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsManagerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

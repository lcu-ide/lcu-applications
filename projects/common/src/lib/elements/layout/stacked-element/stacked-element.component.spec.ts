import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedElementComponent } from './stacked-element.component';

describe('StackedElementComponent', () => {
  let component: StackedElementComponent;
  let fixture: ComponentFixture<StackedElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

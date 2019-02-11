import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseElementComponent } from './switch-case-element.component';

describe('SwitchCaseElementComponent', () => {
  let component: SwitchCaseElementComponent;
  let fixture: ComponentFixture<SwitchCaseElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchCaseElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCaseElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

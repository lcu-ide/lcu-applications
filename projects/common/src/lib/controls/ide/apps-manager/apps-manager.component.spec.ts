import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsManagerComponent } from './apps-manager.component';

describe('AppsManagerComponent', () => {
  let component: AppsManagerComponent;
  let fixture: ComponentFixture<AppsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

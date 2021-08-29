import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableComponentComponent } from './resuable-component.component';

describe('ResuableComponentComponent', () => {
  let component: ResuableComponentComponent;
  let fixture: ComponentFixture<ResuableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResuableComponentComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResuableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

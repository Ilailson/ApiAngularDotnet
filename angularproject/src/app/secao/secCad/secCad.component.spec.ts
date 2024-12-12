/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecCadComponent } from './secCad.component';

describe('SecCadComponent', () => {
  let component: SecCadComponent;
  let fixture: ComponentFixture<SecCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecCadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

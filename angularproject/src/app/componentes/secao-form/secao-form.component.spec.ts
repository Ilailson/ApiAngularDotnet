/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecaoFormComponent } from './secao-form.component';

describe('SecaoFormComponent', () => {
  let component: SecaoFormComponent;
  let fixture: ComponentFixture<SecaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

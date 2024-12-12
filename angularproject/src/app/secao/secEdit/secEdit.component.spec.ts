/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecEditComponent } from './secEdit.component';

describe('SecEditComponent', () => {
  let component: SecEditComponent;
  let fixture: ComponentFixture<SecEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

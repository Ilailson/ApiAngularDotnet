/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecaoComponent } from './secao.component';

describe('SecaoComponent', () => {
  let component: SecaoComponent;
  let fixture: ComponentFixture<SecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

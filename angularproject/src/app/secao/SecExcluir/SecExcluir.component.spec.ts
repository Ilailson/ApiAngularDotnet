/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecExcluirComponent } from './SecExcluir.component';

describe('SecExcluirComponent', () => {
  let component: SecExcluirComponent;
  let fixture: ComponentFixture<SecExcluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecExcluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

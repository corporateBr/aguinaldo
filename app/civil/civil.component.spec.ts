/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CivilComponent } from './civil.component';

describe('CivilComponent', () => {
  let component: CivilComponent;
  let fixture: ComponentFixture<CivilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

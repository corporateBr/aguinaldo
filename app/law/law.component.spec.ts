/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LawComponent } from './law.component';

describe('LawComponent', () => {
  let component: LawComponent;
  let fixture: ComponentFixture<LawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

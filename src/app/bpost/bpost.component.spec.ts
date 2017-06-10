/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BpostComponent } from './bpost.component';

describe('BpostComponent', () => {
  let component: BpostComponent;
  let fixture: ComponentFixture<BpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

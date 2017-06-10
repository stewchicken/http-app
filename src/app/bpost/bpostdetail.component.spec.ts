/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BpostdetailComponent } from './bpostdetail.component';

describe('BpostdetailComponent', () => {
  let component: BpostdetailComponent;
  let fixture: ComponentFixture<BpostdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpostdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpostdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

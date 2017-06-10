/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DhldetailComponent } from './dhldetail.component';

describe('DhldetailComponent', () => {
  let component: DhldetailComponent;
  let fixture: ComponentFixture<DhldetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhldetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

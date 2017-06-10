/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DhlComponent } from './dhl.component';

describe('DhlComponent', () => {
  let component: DhlComponent;
  let fixture: ComponentFixture<DhlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxsetupComponent } from './checkboxsetup.component';

describe('CheckboxsetupComponent', () => {
  let component: CheckboxsetupComponent;
  let fixture: ComponentFixture<CheckboxsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxsetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

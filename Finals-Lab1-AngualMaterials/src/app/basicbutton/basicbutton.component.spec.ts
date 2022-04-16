import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicbuttonComponent } from './basicbutton.component';

describe('BasicbuttonComponent', () => {
  let component: BasicbuttonComponent;
  let fixture: ComponentFixture<BasicbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

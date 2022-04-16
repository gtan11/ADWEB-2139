import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisedbuttonComponent } from './raisedbutton.component';

describe('RaisedbuttonComponent', () => {
  let component: RaisedbuttonComponent;
  let fixture: ComponentFixture<RaisedbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisedbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisedbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

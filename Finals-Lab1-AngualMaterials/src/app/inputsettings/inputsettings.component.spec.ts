import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsettingsComponent } from './inputsettings.component';

describe('InputsettingsComponent', () => {
  let component: InputsettingsComponent;
  let fixture: ComponentFixture<InputsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

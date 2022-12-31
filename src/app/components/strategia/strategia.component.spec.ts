import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategiaComponent } from './strategia.component';

describe('StrategiaComponent', () => {
  let component: StrategiaComponent;
  let fixture: ComponentFixture<StrategiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

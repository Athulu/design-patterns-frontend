import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserwatorComponent } from './obserwator.component';

describe('ObserwatorComponent', () => {
  let component: ObserwatorComponent;
  let fixture: ComponentFixture<ObserwatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObserwatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserwatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

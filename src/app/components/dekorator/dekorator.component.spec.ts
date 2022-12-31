import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DekoratorComponent } from './dekorator.component';

describe('DekoratorComponent', () => {
  let component: DekoratorComponent;
  let fixture: ComponentFixture<DekoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DekoratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DekoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

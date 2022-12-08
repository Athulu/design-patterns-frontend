import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabrykamdComponent } from './fabrykamd.component';

describe('FabrykamdComponent', () => {
  let component: FabrykamdComponent;
  let fixture: ComponentFixture<FabrykamdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabrykamdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabrykamdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabrykaabComponent } from './fabrykaab.component';

describe('FabrykaabComponent', () => {
  let component: FabrykaabComponent;
  let fixture: ComponentFixture<FabrykaabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabrykaabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabrykaabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasadaComponent } from './fasada.component';

describe('FasadaComponent', () => {
  let component: FasadaComponent;
  let fixture: ComponentFixture<FasadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FasadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

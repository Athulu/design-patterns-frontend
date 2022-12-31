import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KompozytComponent } from './kompozyt.component';

describe('KompozytComponent', () => {
  let component: KompozytComponent;
  let fixture: ComponentFixture<KompozytComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KompozytComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KompozytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

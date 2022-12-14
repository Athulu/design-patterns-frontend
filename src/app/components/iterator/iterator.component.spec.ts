import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteratorComponent } from './iterator.component';

describe('IteratorComponent', () => {
  let component: IteratorComponent;
  let fixture: ComponentFixture<IteratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IteratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

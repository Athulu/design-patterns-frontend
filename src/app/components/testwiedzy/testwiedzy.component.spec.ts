import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestwiedzyComponent } from './testwiedzy.component';

describe('TestwiedzyComponent', () => {
  let component: TestwiedzyComponent;
  let fixture: ComponentFixture<TestwiedzyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestwiedzyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestwiedzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

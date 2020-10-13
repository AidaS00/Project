import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddogComponent } from './childdog.component';

describe('ChilddogComponent', () => {
  let component: ChilddogComponent;
  let fixture: ComponentFixture<ChilddogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilddogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilddogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

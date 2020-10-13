import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchildComponent } from './catchild.component';

describe('CatchildComponent', () => {
  let component: CatchildComponent;
  let fixture: ComponentFixture<CatchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

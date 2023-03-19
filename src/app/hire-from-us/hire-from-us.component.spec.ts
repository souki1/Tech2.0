import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireFromUsComponent } from './hire-from-us.component';

describe('HireFromUsComponent', () => {
  let component: HireFromUsComponent;
  let fixture: ComponentFixture<HireFromUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireFromUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireFromUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

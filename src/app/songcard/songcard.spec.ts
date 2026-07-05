import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Songcard } from './songcard';

describe('Songcard', () => {
  let component: Songcard;
  let fixture: ComponentFixture<Songcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Songcard],
    }).compileComponents();

    fixture = TestBed.createComponent(Songcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

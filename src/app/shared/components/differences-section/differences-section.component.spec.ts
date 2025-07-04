import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferencesSectionComponent } from './differences-section.component';

describe('DifferencesSectionComponent', () => {
  let component: DifferencesSectionComponent;
  let fixture: ComponentFixture<DifferencesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifferencesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifferencesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferencesPageComponent } from './differences-page.component';

describe('DifferencesPageComponent', () => {
  let component: DifferencesPageComponent;
  let fixture: ComponentFixture<DifferencesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifferencesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifferencesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

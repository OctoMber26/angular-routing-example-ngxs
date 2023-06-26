import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesDetailsComponent } from './shoes-details.component';

describe('ShoesDetailsComponent', () => {
  let component: ShoesDetailsComponent;
  let fixture: ComponentFixture<ShoesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoesDetailsComponent]
    });
    fixture = TestBed.createComponent(ShoesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

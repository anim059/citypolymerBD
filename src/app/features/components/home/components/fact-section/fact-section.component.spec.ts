import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactSectionComponent } from './fact-section.component';

describe('FactSectionComponent', () => {
  let component: FactSectionComponent;
  let fixture: ComponentFixture<FactSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FactSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListInfoPageComponent } from './product-list-info-page.component';

describe('ProductListInfoPageComponent', () => {
  let component: ProductListInfoPageComponent;
  let fixture: ComponentFixture<ProductListInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListInfoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductListInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

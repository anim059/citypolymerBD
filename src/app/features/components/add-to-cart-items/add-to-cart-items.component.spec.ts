import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartItemsComponent } from './add-to-cart-items.component';

describe('AddToCartItemsComponent', () => {
  let component: AddToCartItemsComponent;
  let fixture: ComponentFixture<AddToCartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddToCartItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddToCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

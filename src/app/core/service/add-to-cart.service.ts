import { BehaviorSubject, Subject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  private addToCartProductList : Product[] = [];

  isNewProductAdded$ = new BehaviorSubject<boolean>(true);

  constructor() { }

  setAddToCartProduct(product : Product): void{
    this.addToCartProductList.push(product);
    // localStorage.setItem('cartItemList', JSON.stringify(this.addToCartProductList))
  }

  getAddToCartProduct(): Product[]{
    // let products = JSON.parse(localStorage.getItem('cartItemList') || '');
    return this.addToCartProductList;
  }
  
}

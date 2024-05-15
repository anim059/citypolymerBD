import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddToCartService } from '../../../core/service/add-to-cart.service';
import { Product } from '../../../core/model/product';

@Component({
  selector: 'city-add-to-cart-items',
  templateUrl: './add-to-cart-items.component.html',
  styleUrl: './add-to-cart-items.component.scss'
})
export class AddToCartItemsComponent implements OnInit{

  cartProductList : Product[] = [];

  constructor(public dialogRef: MatDialogRef<AddToCartItemsComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private addToCartService : AddToCartService) {
    dialogRef.disableClose = true
  }

  ngOnInit(): void {
    this.getAllCartProduct();
  }

  getAllCartProduct(): void{
    this.cartProductList =  this.addToCartService.getAddToCartProduct();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  
}

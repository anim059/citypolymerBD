import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AddToCartService } from '../../../core/service/add-to-cart.service';
import { FormControl } from '@angular/forms';
import { Product } from '../../../core/model/product';
import { ProductStorageService } from '../../../core/service/product-storage.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'city-product-list-info-page',
  templateUrl: './product-list-info-page.component.html',
  styleUrl: './product-list-info-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListInfoPageComponent implements OnInit {

  title: string = 'Product Info';

  route: string = 'Info';

  productAttribues: { key: string; value: string }[] = [
    { key: 'Code', value: 'code' },
    { key: 'Name', value: 'name' },
    { key: 'Type', value: 'type' },
    { key: 'Category', value: 'category' },
    { key: 'Price', value: 'price' }
  ];

  pipeProductList: any[] = [];

  attributeController = new FormControl();

  productController = new FormControl();

  constructor(private router: ActivatedRoute, private productStorageService: ProductStorageService,
    private addToCartService: AddToCartService) { }


  ngOnInit(): void {
    this.router.params.subscribe((value: any) => {
      if (value.type === 'steel') {
        this.title = 'City Iron & Steel';
        this.route = 'Iron & Steel';
      }
    })

    this.pipeProductList = this.productStorageService.getAllPipeProductListInfo();

    this.productController.valueChanges
    .subscribe((value) => {
      this.pipeProductList = this.productStorageService.getProductByAttributes(this.attributeController.value, value);
    })

  }

  addThisProduct(product: Product): void {
    this.addToCartService.setAddToCartProduct(product as Product);
    this.addToCartService.isNewProductAdded$.next(true);
  }

}

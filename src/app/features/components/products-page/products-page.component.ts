import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Product } from '../../../core/model/product';
import { ProductStorageService } from '../../../core/service/product-storage.service';

@Component({
  selector: 'city-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPageComponent implements OnInit{

  pipeProductList : Product[] = [];

  constructor(private productStorageService : ProductStorageService){ }

  ngOnInit(): void {
    this.pipeProductList = this.productStorageService.getAllPipeProductListInfo();
  }



}

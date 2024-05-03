import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Product } from '../../../core/model/product';
import { ProductStorageService } from '../../../core/service/product-storage.service';

@Component({
  selector: 'city-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit{

  param : string = "";

  product: Product = {
    code: '',
    name: '',
    type: '',
    category: '',
    price: '',
    description: '',
    img: '',
    availability: ''
  }

  constructor(private router : ActivatedRoute, private productStorageService : ProductStorageService){ }

  ngOnInit(): void {
    this.router.params.subscribe((value: any)=>{
      this.product = this.productStorageService.getProductByCode(value.code) || {
        code: '',
        name: '',
        type: '',
        category: '',
        price: '',
        description: '',
        img: '',
        availability: ''
      };
    })
  }

}

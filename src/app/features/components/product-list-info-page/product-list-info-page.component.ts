import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductStorageService } from '../../../core/service/product-storage.service';

@Component({
  selector: 'city-product-list-info-page',
  templateUrl: './product-list-info-page.component.html',
  styleUrl: './product-list-info-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListInfoPageComponent implements OnInit{

  title : string = 'Product Info';

  route : string = 'Info';

  pipeProductList : any[] = [];


  constructor(private router : ActivatedRoute, private productStorageService : ProductStorageService){ }

  
  ngOnInit(): void {
    this.router.params.subscribe((value: any)=>{
      if(value.type === 'steel'){
        this.title = 'City Iron & Steel';
        this.route = 'Iron & Steel';
      }
    })

    this.pipeProductList = this.productStorageService.getAllPipeProductListInfo();
  }
}

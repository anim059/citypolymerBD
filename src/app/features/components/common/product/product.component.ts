import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AddToCartService } from '../../../../core/service/add-to-cart.service';
import { Product } from '../../../../core/model/product';
import { filter } from 'rxjs';
import { getWindow } from 'ssr-window';

@Component({
  selector: 'city-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit{

  @Input() pipeProduct : Product | undefined;

  constructor(private addToCartService : AddToCartService, private router : Router){ }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      getWindow().scrollTo({ top: 0, behavior: 'instant' }); // Reset scroll position to top
    });
  }

  addThisProduct(): void{
    this.addToCartService.setAddToCartProduct(this.pipeProduct as Product);
    this.addToCartService.isNewProductAdded$.next(true);
  }

}

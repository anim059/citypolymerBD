import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AddToCartService } from '../../../../core/service/add-to-cart.service';
import { Product } from '../../../../core/model/product';

@Component({
  selector: 'city-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input() pipeProduct : Product | undefined;

  constructor(private addToCartService : AddToCartService){ }

  addThisProduct(): void{
    this.addToCartService.setAddToCartProduct(this.pipeProduct as Product);
    this.addToCartService.isNewProductAdded$.next(true);
  }

}

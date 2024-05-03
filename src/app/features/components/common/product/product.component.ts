import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Product } from '../../../../core/model/product';

@Component({
  selector: 'city-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input() pipeProduct : Product | undefined;

}

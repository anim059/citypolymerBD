import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'city-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {

}

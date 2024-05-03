import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'city-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureSectionComponent {

}

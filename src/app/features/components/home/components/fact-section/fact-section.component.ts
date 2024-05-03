import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'city-fact-section',
  templateUrl: './fact-section.component.html',
  styleUrl: './fact-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FactSectionComponent {

}

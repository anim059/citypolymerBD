import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'city-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrl: './our-partners.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurPartnersComponent {

  partnersInfo : any[] = [
    {
      img : 'A1-Logo.png'
    },
    {
      img : 'A1-Logo.png'
    },{
      img : 'A1-Logo.png'
    },{
      img : 'A1-Logo.png'
    },{
      img : 'A1-Logo.png'
    },{
      img : 'A1-Logo.png'
    }
  ]

}

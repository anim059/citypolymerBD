import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'city-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrl: './our-partners.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurPartnersComponent {

  partnersInfo: any[] = [
    {
      img: 'A1-Logo.png'
    },
    {
      img: 'ajay.png'
    },
    {
      img: 'astra_pipe.png'
    },
    {
      img: 'brb.jpg'
    },
    {
      img: 'charu.png'
    },
    {
      img: 'npoly.png'
    },
    {
      img: 'pedrollo.png'
    },
    {
      img: 'rak.png'
    },
    {
      img: 'rfl.jpg'
    },
    {
      img: 'rosa.png'
    },
    {
      img: 'water_tec.png'
    }
  ]

}

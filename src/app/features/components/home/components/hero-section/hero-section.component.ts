import { ChangeDetectionStrategy, Component } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'city-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent {

  dynamicSlides = [
    {
      id: '1',
      src: 'pipe2.jpg',
      alt: 'Side 1',
      title: 'Side 1'
    },
    {
      id: '2',
      src: 'pipe1.jpg',
      alt: 'Side 2',
      title: 'Side 2'
    },
    {
      id: '3',
      src: 'pipe2.jpg',
      alt: 'Side 3',
      title: 'Side 3'
    },
    {
      id: '4',
      src: 'pipe1.jpg',
      alt: 'Side 4',
      title: 'Side 4'
    },
    {
      id: '5',
      src: 'pipe2.jpg',
      alt: 'Side 5',
      title: 'Side 5'
    }
  ]

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay : true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
  }

}

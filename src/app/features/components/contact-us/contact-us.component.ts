import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { getWindow } from 'ssr-window';

@Component({
  selector: 'city-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsComponent implements OnInit{

  ngOnInit(): void {
   getWindow().scrollTo({ top: 0, behavior: 'instant' });
  }

}

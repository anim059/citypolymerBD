import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { getWindow } from 'ssr-window';

@Component({
  selector: 'city-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyProfileComponent implements OnInit{

  ngOnInit(): void {
   getWindow().scrollTo({ top: 0, behavior: 'instant' });
  }

}

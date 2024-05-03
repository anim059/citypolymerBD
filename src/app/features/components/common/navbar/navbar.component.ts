import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'city-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  @Input() showDropShadow : boolean = false;

  @Input() showHeadingContent : boolean = false;

  isOpenSideNav: boolean = true;

  isMobileSize: boolean = false;

  showDropdownMenu : boolean = false;

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {    
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobileSize = true;
      } else {
        this.isMobileSize = false;
      }
    })
  }

  openSidenav(): void {
    const menu = document.querySelectorAll('.navbar-menu');
    for (var j = 0; j < menu.length; j++) {
      menu[j].classList.toggle('hidden');
    }
  }

  hideSidenav(): void {
    const menu = document.querySelectorAll('.navbar-menu');
    for (var j = 0; j < menu.length; j++) {
      menu[j].classList.toggle('hidden');
    }
  }

}

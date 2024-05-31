import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

import { getWindow } from 'ssr-window';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  title = 'City Polymer Bd';

  loader : boolean = true;

  constructor(private router: Router){ }

  ngOnInit(): void {    
    
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        this.loader = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loader = false;
      }
    })

    getWindow().addEventListener('load', () => {
      this.loader = false;
    });
  }

}

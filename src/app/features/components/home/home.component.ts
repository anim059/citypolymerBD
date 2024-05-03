import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs';
import { getWindow } from 'ssr-window';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  showScrollBtn : boolean = false;

  showDropShadow : boolean = false;

  showHeadingContent: boolean = true;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    let scrollPosition = window.scrollY;
    if(scrollPosition >= 700){
      this.showScrollBtn = true;
      this.showDropShadow = true;
    }else{
      this.showScrollBtn = false;
      this.showDropShadow = false;
    }
  }

  constructor(private router : Router){ }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      getWindow().scrollTo({ top: 0, behavior: 'instant' }); // Reset scroll position to top
    });
  }

  scrollToTop(): void{
    getWindow().scrollTo({ top: 0, behavior: 'smooth' });
  }

}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { AddToCartItemsComponent } from '../../add-to-cart-items/add-to-cart-items.component';
import { AddToCartService } from '../../../../core/service/add-to-cart.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
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

  addToCartProductCount : number = 0;

  constructor(private observer: BreakpointObserver, public dialog: MatDialog,
    private addToCartService : AddToCartService, private cd : ChangeDetectorRef) { }

  ngOnInit(): void {    
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobileSize = true;
      } else {
        this.isMobileSize = false;
      }
    })
    this.addToCartService.isNewProductAdded$.subscribe((value)=>{
      if(value){
        let productList = this.addToCartService.getAddToCartProduct();
        this.addToCartProductCount = productList.length
        this.cd.markForCheck();
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

  openDialog(): void{
    let dialogRef = this.dialog.open(AddToCartItemsComponent, {
      width: '800px',
      maxHeight: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(()=>{
      
    })
  }

}

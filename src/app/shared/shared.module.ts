import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    CarouselModule
  ],
  exports:[MatIconModule, MatDividerModule, CarouselModule]
})
export class SharedModule { }

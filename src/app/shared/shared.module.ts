import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog'
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip'
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    CarouselModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule
  ],
  exports:[MatIconModule, MatDividerModule, CarouselModule, MatBadgeModule, MatDialogModule, MatSelectModule, MatInputModule, 
    FormsModule, ReactiveFormsModule, MatTooltipModule]
})
export class SharedModule { }

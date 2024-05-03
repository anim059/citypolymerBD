import { RouterModule, Routes } from '@angular/router';

import { CompanyProfileComponent } from './features/components/company-profile/company-profile.component';
import { ContactUsComponent } from './features/components/contact-us/contact-us.component';
import { HomeComponent } from './features/components/home/home.component';
import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './features/components/product-details/product-details.component';
import { ProductListInfoPageComponent } from './features/components/product-list-info-page/product-list-info-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'company-profile', component: CompanyProfileComponent },
  { path: 'product-detail/:code', component: ProductDetailsComponent },
  { path: 'product-list-info/:type', component: ProductListInfoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

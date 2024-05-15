import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './features/components/home/components/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryInfoComponent } from './features/components/home/components/category-info/category-info.component';
import { CompanyIntroductionComponent } from './features/components/home/components/company-introduction/company-introduction.component';
import { CompanyProfileComponent } from './features/components/company-profile/company-profile.component';
import { ContactUsComponent } from './features/components/contact-us/contact-us.component';
import { FactSectionComponent } from './features/components/home/components/fact-section/fact-section.component';
import { FeatureSectionComponent } from './features/components/home/components/feature-section/feature-section.component';
import { FooterComponent } from './features/components/common/footer/footer.component';
import { HeroSectionComponent } from './features/components/home/components/hero-section/hero-section.component';
import { HomeComponent } from './features/components/home/home.component';
import { NavbarComponent } from './features/components/common/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { OurPartnersComponent } from './features/components/our-partners/our-partners.component';
import { ProductComponent } from './features/components/common/product/product.component';
import { ProductDetailsComponent } from './features/components/product-details/product-details.component';
import { ProductListInfoPageComponent } from './features/components/product-list-info-page/product-list-info-page.component';
import { ProductsPageComponent } from './features/components/products-page/products-page.component';
import { SharedModule } from './shared/shared.module';
import { AddToCartItemsComponent } from './features/components/add-to-cart-items/add-to-cart-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroSectionComponent,
    FeatureSectionComponent,
    ProductsPageComponent,
    ProductComponent,
    BannerComponent,
    FactSectionComponent,
    FooterComponent,
    CompanyIntroductionComponent,
    CategoryInfoComponent,
    ContactUsComponent,
    CompanyProfileComponent,
    ProductDetailsComponent,
    OurPartnersComponent,
    ProductListInfoPageComponent,
    AddToCartItemsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ShopComponent } from './components/shop/shop.component';
import { MaintenanceProductsComponent } from './components/maintenance-products/maintenance-products.component';
import { CardComponent } from './components/maintenance-products/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    ButtonComponent,
    FooterComponent,
    SubscribeComponent,
    IntroductionComponent,
    ShopComponent,
    MaintenanceProductsComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

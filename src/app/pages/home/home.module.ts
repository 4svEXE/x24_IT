import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeComponent } from './home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OurServicesComponent } from './components/our-services/our-services.component';

import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { HiroComponent } from './components/hiro/hiro.component';


@NgModule({
  declarations: [HomeComponent, CarouselComponent, OurServicesComponent, HiroComponent],
  imports: [BrowserAnimationsModule, CommonModule, CarouselModule, ServiceCardComponent],
})
export class HomeModule {}

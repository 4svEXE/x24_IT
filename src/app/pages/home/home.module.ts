import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeComponent } from './home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HomeComponent, CarouselComponent],
  imports: [BrowserAnimationsModule, CommonModule, CarouselModule],
})
export class HomeModule {}

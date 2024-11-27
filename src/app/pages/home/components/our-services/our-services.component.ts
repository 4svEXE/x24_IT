import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { OurServices, ourServices } from '../../../../core/variables/our-services';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
  services: OurServices = ourServices;

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      632: {
        items: 2
      },
      960: {
        items: 3
      },
      1125: {
        items: 3
      },
      1290: {
        items: 4
      },
      1400: {
        items: 4
      },
      1500: {
        items: 5
      },
    }
  };
}

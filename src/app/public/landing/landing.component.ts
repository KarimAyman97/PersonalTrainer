import { Component, OnInit } from '@angular/core';

import Swiper, {
  SwiperOptions,
  Autoplay,
  Pagination,
  Navigation,
} from 'swiper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    Swiper.use([Autoplay, Pagination, Navigation]);
  }
  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  /*** Swiper Option And Variables */
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: false,
    loop: true,
  };
}

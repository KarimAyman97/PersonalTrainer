import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Swiper, { SwiperOptions, Autoplay, Pagination } from 'swiper';
import { OwlSliders } from '../interfaces/Owl-sliders';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  /*** Swiper Option And Variables */

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    modules: [Autoplay],
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: true,
    loop: true,
  };
  /************************************/

  /** this is the owl carousel  options and variables */
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['', ''],
    margin: 50,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      940: {
        items: 2,
      },
    },
    nav: true,
  };

  sliders: OwlSliders[] = [
    {
      title: 'Article on health and food',
      description:
        'Health is directly related to food, for proper nutrition is the basis of sound health, because food is both a disease and a medicine, so every person must pay attention to the quality of the food he eats.',
      image: 'assets/images/owl/1.jpg',
    },
    {
      title: 'The benefits and harms of nutritional supplements',
      description:
        'Some nutritional supplements can help ensure that you get an adequate amount of the essential elements your body needs to function properly.',
      image: 'assets/images/owl/2.jpg',
    },
    {
      title: 'Bodybuilding training methods',
      description:
        'It is a physical sport that originated in the late nineteenth and early twentieth centuries, and aims to harmonize the elements of the human body, and improve physical abilities with each other.',
      image: 'assets/images/owl/3.jpg',
    },
  ];
  /************************************************************************** */

  trainer_type: string = '';
  trainer_location: string = '';
  @ViewChild('type') type!: ElementRef;
  @ViewChild('location') location!: ElementRef;

  constructor() {}

  ngOnInit() {
    Swiper.use([Autoplay, Pagination]);
  }

  onSelectedType(): void {
    this.trainer_type = this.type.nativeElement.value;
    console.log(this.type);
  }

  onSelectedLocation(): void {
    this.trainer_location = this.location.nativeElement.value;
    console.log(this.trainer_location);
  }
}

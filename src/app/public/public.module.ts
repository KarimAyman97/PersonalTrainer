import { PublicRoutingModule } from './public.routing';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CoachSearchComponent } from './coach-search/coach-search.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { StarRatingModule } from 'angular-star-rating';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [LandingComponent, CoachSearchComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,
    StarRatingModule.forRoot(),
    NgxPaginationModule,
    CarouselModule,
    SwiperModule,
  ],
})
export class PublicModule {}

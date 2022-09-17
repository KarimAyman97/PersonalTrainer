import { CalisthenicsCoachingComponent } from './calisthenics-coaching/calisthenics-coaching.component';
import { PersonalCoachingComponent } from './personal-coaching/personal-coaching.component';
import { OnlineCoachingComponent } from './online-coaching/online-coaching.component';
import { HowItWorksComponent } from './HowItWorks/HowItWorks.component';
import { PublicRoutingModule } from './public.routing';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { StarRatingModule } from 'angular-star-rating';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'swiper/angular';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

@NgModule({
  declarations: [
    LandingComponent,
    HowItWorksComponent,
    OnlineCoachingComponent,
    PersonalCoachingComponent,
    CalisthenicsCoachingComponent,
  ],
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
    NgxPageScrollCoreModule,
  ],
})
export class PublicModule {}

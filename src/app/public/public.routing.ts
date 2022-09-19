import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CalisthenicsCoachingComponent } from './calisthenics-coaching/calisthenics-coaching.component';
import { PersonalCoachingComponent } from './personal-coaching/personal-coaching.component';
import { OnlineCoachingComponent } from './online-coaching/online-coaching.component';
import { HowItWorksComponent } from './HowItWorks/HowItWorks.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'HowItWorks',
    component: HowItWorksComponent,
  },
  {
    path: 'online-coaching',
    component: OnlineCoachingComponent,
  },
  {
    path: 'personal-coaching',
    component: PersonalCoachingComponent,
  },
  {
    path: 'calisthenics-coaching',
    component: CalisthenicsCoachingComponent,
  },
  {
    path: 'contact-me',
    component: ContactMeComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}

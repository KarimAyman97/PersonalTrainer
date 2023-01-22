import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutMeComponent } from './public/about-me/about-me.component';
import { CalisthenicsCoachingComponent } from './public/calisthenics-coaching/calisthenics-coaching.component';
import { ContactMeComponent } from './public/contact-me/contact-me.component';
import { HowItWorksComponent } from './public/HowItWorks/HowItWorks.component';
import { LandingComponent } from './public/landing/landing.component';
import { OnlineCoachingComponent } from './public/online-coaching/online-coaching.component';
import { PersonalCoachingComponent } from './public/personal-coaching/personal-coaching.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full',
  },
  {
    path: 'auth/signup',
    component: SignupComponent,
  },
  {
    path: 'auth/signin',
    component: SigninComponent,
  },
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'public/landing',
    component: LandingComponent,
  },
  {
    path: 'public/HowItWorks',
    component: HowItWorksComponent,
  },
  {
    path: 'public/online-coaching',
    component: OnlineCoachingComponent,
  },
  {
    path: 'public/personal-coaching',
    component: PersonalCoachingComponent,
  },
  {
    path: 'public/calisthenics-coaching',
    component: CalisthenicsCoachingComponent,
  },
  {
    path: 'public/contact-me',
    component: ContactMeComponent,
  },
  {
    path: 'public/about-me',
    component: AboutMeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

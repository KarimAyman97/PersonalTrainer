import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth.routing';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}

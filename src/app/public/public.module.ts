import { PublicRoutingModule } from './public.routing';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, PublicRoutingModule, FormsModule, MatSelectModule],
})
export class PublicModule {}

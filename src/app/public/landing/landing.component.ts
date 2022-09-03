import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  trainer_type: string = '';
  trainer_location: string = '';

  @ViewChild('type') type!: ElementRef;
  @ViewChild('location') location!: ElementRef;

  constructor() {}

  ngOnInit() {}

  onSelectedType(): void {
    this.trainer_type = this.type.nativeElement.value;
    console.log(this.type);
  }

  onSelectedLocation(): void {
    this.trainer_location = this.location.nativeElement.value;
    console.log(this.trainer_location);
  }
}

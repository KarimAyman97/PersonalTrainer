import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

export interface Filter {
  name: string;
  checked: boolean;
  subFilters?: Filter[];
}
@Component({
  selector: 'app-coach-search',
  templateUrl: './coach-search.component.html',
  styleUrls: ['./coach-search.component.scss'],
})
export class CoachSearchComponent implements OnInit {
  displayed: boolean = false;
  starRating = 0;

  speciality: Filter[] = [
    { name: 'doctor', checked: false },
    { name: 'coach', checked: false },
  ];
  constructor() {}

  ngOnInit(): void {}
}

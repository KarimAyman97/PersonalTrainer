import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  test: Date = new Date();
  focus: any;
  focus1: any;
  focus2: any;
  constructor() {}

  ngOnInit() {}
}

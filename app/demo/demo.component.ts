import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import {MatStepper} from '@angular/material';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  @ViewChild('stepper') stepper: MatStepper;
  constructor() { }

  ngOnInit() {
  }
  
  move(index: number) {
    this.stepper.selectedIndex = index;
  }

}
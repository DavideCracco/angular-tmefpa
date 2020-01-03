import { Component, OnInit } from '@angular/core';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'app-display-element',
  templateUrl: './display-element.component.html',
  styleUrls: ['./display-element.component.css']
})
export class DisplayElementComponent implements OnInit {
  elementi: ElementComponent = [];

  constructor() { }

  ngOnInit() {
  }

}
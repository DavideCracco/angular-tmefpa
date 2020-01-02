import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  element;

  constructor(service: BusService) { 

   }

  ngOnInit() {
  }

  onClick(){
  }

}
import { Component, Output,  OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  @Output() element;

  constructor(public service: BusService) { 

   }

  ngOnInit() {
  }

  onClick(): void{
    this.service.setElement(this.element);
  }

}
import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  elementEvent = new EventEmitter<{element: any}>();
  @Input() lista = [];

  constructor(public service: BusService) {
   }

  ngOnInit() {
  }

  

}
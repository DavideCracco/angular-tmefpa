import { Component, Input, OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() lista = [];

  constructor(public service: BusService) {
   }

  ngOnInit() {
  }

  

}
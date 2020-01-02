import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  elementEvent = new EventEmitter<{element: any}>();
  @Input() lista = [];

  constructor() {
   }

  ngOnInit() {
  }

  onCbClick(element){
    this.lista.splice(this.lista.indexOf(element), 1);    
  }  

}
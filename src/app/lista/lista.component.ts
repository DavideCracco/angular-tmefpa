import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  elementEvent = new EventEmitter<{element: ElementComponent}>();
  @Input() lista = [];
  @Input() selection;

  constructor() {
   }

  ngOnInit() {
  }

  onTxtClick(element){
    console.log("click on " + element);
    this.selection = element;
  }

  onBtnClick(element){
    this.lista.splice(this.lista.indexOf(element), 1);    
  }  

}
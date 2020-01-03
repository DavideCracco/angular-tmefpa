import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  //elementEvent = new EventEmitter<{element: ElementComponent}>();
  @Output() selectionEvent = new EventEmitter<{selection: any}>();
  @Input() lista = [];

  constructor() {
   }

  ngOnInit() {
  }

  onTxtClick(element){
    console.log("click on " + element);
    this.selectionEvent.emit({
      selection: element
    });
  }

  onBtnClick(element){
    this.lista.splice(this.lista.indexOf(element), 1);    
  }  

}
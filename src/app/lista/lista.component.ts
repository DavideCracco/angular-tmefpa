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
    //console.log("lista -> " , this.lista);
    console.log("element -> " , element);
    //console.log("click on " + element);
    //console.log("~>" , this.lista.indexOf(element));
    //console.log("indexOf -> " , this.lista.indexOf(element));
    this.selectionEvent.emit({
      selection: this.lista.indexOf(element)
    });
  }

  onBtnClick(element){
    console.log(element);
    if(element.elType != "C")
      this.lista.splice(this.lista.indexOf(element), 1); 

  }  

}
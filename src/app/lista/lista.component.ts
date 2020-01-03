import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ElementComponent } from '../element/element.component';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  //elementEvent = new EventEmitter<{element: ElementComponent}>();
  @Output() selectionEvent = new EventEmitter<{selection: any}>();
  @Input() lista = [];

  constructor(busService: BusService) {
   }

  ngOnInit() {
  }

  onTxtClick(element){
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
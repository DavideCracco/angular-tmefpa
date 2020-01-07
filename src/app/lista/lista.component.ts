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
  confirm = { "state":"false", "id":"undefined"};

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
    if(element.elType === "A" || element.elType === '')
      this.lista.splice(this.lista.indexOf(element), 1);
    else if(element.elType === "B"){
      this.confirm = { "state":"true", "id":element._id};
      console.log(this.confirm);
    }
  }

  onConfirmClk(button, element){
    console.log(element);
    console.log(this.lista.indexOf(element));
    if(button === "si"){      
      this.lista.splice(this.lista.indexOf(element), 1);
      this.confirm = { "state":"false", "id":element._id};
    }else{
      this.confirm = { "state":"false", "id":element._id};
    }
  }

}
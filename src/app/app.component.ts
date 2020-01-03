import { Component } from '@angular/core';

import { ElementComponent } from './element/element.component';
import { DisplayElementComponent } from './display-element/display-element.component';
import { BusService } from './bus.component';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lista = [];
  selection = 0;
  el: ElementComponent = new ElementComponent();

  constructor(busService: BusService){
    this.lista = busService.getThings();
  }

  setLista(element){
    var el = new ElementComponent();
    el.name = element.element;
    if((element.element != null || 
       element.element != undefined) &&
       this.lista.length < 5){
      this.lista.push(el);
    }
    console.log("LISTA -> " , this.lista);
  }

  setSelection(selection){
    this.selection = selection;
    console.log("=> " , this.selection)
  }

}

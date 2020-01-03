import { Component } from '@angular/core';

import { ElementComponent } from './element/element.component';
import { DisplayElementComponent } from './display-element/display-element.component';
import { BusService } from './bus.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lista = [];
  selection = 0;

  constructor(private busService: BusService){
    let el = new ElementComponent();
    el.name = "Banana"
    el.description = "E' un frutto."
    el.elType = "B";
    this.lista.push(el);
    this.getThings();
  }

  getThings(): void{
    console.log("COSE -> ", this.busService.getThings());
    this.busService.getThings()
    .subscribe(lista => {
      console.log("OH:" , lista);
      this.lista.push(lista);
      });
    console.log("--> " , this.lista);
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

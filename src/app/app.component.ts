import { Component } from '@angular/core';
import {ElementComponent} from './element/element.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lista = [];
  el: ElementComponent;

  setLista(element){
    this.el.
    console.log(this.el);
    if((element.element != null || 
       element.element != undefined) &&
       this.lista.length < 5){
      this.lista.push(element.element);
    }
  }

}

import { Component } from '@angular/core';
import { ElementComponent } from './element/element.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lista = [1,2];
  selection;
  el: ElementComponent = new ElementComponent();

  setLista(element){
    this.el.name = element.element;
    console.log(this.el);
    if((element.element != null || 
       element.element != undefined) &&
       this.lista.length < 5){
      this.lista.push(element.element);
    }
    this.selection = this.lista[0];
    console.log(this.selection);
  }

  setSelection(selection){
    this.selection = selection;
  }

}

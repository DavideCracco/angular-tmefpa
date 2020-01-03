import { Component } from '@angular/core';
import { ElementComponent } from './element/element.component';
import { DisplayElementComponent } from './display-element/display-element.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lista = ["Uno", "Due"];
  selection = 0;
  el: ElementComponent = new ElementComponent();

  setLista(element){
    this.el.name = element.element;
    console.log(this.el);
    if((element.element != null || 
       element.element != undefined) &&
       this.lista.length < 5){
      this.lista.push(element.element);
    }
  }

  setSelection(selection){
    this.selection = selection;
    DisplayElementComponent.
    console.log("=> " , this.selection)
  }

}

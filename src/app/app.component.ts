import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lista: any = [];

  setLista(element){
    if(element.element != null || element.element != undefined){
      this.lista.push(element.element);
    }
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lista = [1, 2];

  setLista(element){
    console.log(element + " - " + this.lista);
    if(element != null || element != undefined){
      return this.lista.push(element);
    }
  }

}

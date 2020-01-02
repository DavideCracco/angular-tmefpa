import { Injectable } from '@angular/core';

@Injectable()
export class BusService {
  element;
  lista: any = [];

  constructor() { }

  public setElement(element){
    this.element = element;
    this.lista.push(this.element);
    console.log(this.lista);    
  }

  public getElement(){
    return this.element;
  }

}
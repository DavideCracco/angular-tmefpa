import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ElementComponent } from './element/element.component';

const httpOptions = {
  headers: new HttpHeaders({
  "Content-Type" : "application/json",
  "x-api-key" : "5e15bc32b68f0802dd3e611c"
  })
};

@Injectable()
export class BusService implements OnInit {
  private url = "https://elements-b73d.restdb.io/rest/things";
  lista;


  constructor( private http: HttpClient ) {  }

    /*getThings(): Observable<ElementComponent[]>
    {
      return this.http.get<ElementComponent[]>(this.url);
    }*/

    ngOnInit(){
      this.lista = this.getThings();
    }

    public getThings(){
      return this.http.get(this.url, httpOptions)
        /*.subscribe(things => { 
          this.lista = things;
          console.log("LOG -> " , this.lista);
          console.log("THINGS -> " , things);
        })*/;
      //console.log("BusService -> ",  this.lista);
      //return this.lista;
    }

    public setThings(element){
      this.http.post(this.url, element, httpOptions)
        .subscribe(things => {})
    }

    public updateThings(element){
      this.http.patch(this.url, element, httpOptions);
    }

    public deleteThings(element){
      this.http.delete(this.url, httpOptions);
    }

}
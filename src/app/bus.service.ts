import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ElementComponent } from './element/element.component';

@Injectable()
export class BusService {
  private url = "https://elements-b73d.restdb.io/rest/things";
  httpOptions = {
    headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "no-cors"
    })
  };

  constructor( private http: HttpClient ) {  }

    /*getThings(): Observable<ElementComponent[]>
    {
      return this.http.get<ElementComponent[]>(this.url);
    }*/

    private getThings(){
      this.httpOptions.headers = this.httpOptions.headers.set("Access-Control-Allow-Origin", "no-cors");
      this.http.get(this.url,)
        .subscribe(things => { console.log(things) });
    }

}
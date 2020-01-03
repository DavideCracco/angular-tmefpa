import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ElementComponent } from './element/element.component';

@Injectable()
export class BusService {
  private url = "https://elements-b73d.restdb.io/rest/things";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
    //, private messageService: MessageService
    ) { console.log(this.url); }

    getThings(): Observable<ElementComponent[]>{
      return this.http.get<ElementComponent[]>(this.url, this.httpOptions);
    }

}
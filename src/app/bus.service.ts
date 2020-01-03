import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BusService {
  private url = "https://elements-b73d.restdb.io/rest/things";
  //lista = [];

  constructor(
    private http: HttpClient
    //, private messageService: MessageService
    ) { }

    getThings(){
      return this.http.get(this.url);
    }

}
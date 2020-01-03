import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  name;
  description;
  elType;

  constructor() { 
    this.name = "none";
    this.description = "none";
    this.elType = "";
  }

  ngOnInit() {
  }

  public setElement(name, description, elType){
    this.name = name;
    this.description = description;
    this.elType = elType;
  }

}
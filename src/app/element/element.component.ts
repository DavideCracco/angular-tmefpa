import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})

export class ElementComponent implements OnInit {
  _id;
  name;
  description;
  elType;

  constructor() {
    this._id = '';
    this.name = "none";
    this.description = "none";
    this.elType = "";
  }

  ngOnInit() {
  }

  public setElement(name, description, elType): void{
    this.name = name;
    this.description = description;
    this.elType = elType;
  }

  public getElement(): ElementComponent{
    var el: ElementComponent;
    el.name = this.name;
    el.description = this.description;
    el.elType = this.elType;
    return el;
  }

}
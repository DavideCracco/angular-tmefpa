import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'app-display-element',
  templateUrl: './display-element.component.html',
  styleUrls: ['./display-element.component.css']
})
export class DisplayElementComponent implements OnInit {
  @Input() lista = [];
  @Input() selection;
  selected: ElementComponent;
  mod: ElementComponent;
  editable = false;

  constructor() {
    this.mod = {"_id":"", "name":"", "description":"", "elType":""};
  }

  ngOnInit() {/*
    let el = new ElementComponent();
    el.name = "Banana"
    el.description = "E' un frutto."
    el.elType = "B";
    this.lista.push(el);*/
    this.selected = this.lista[0];
  }

  ngOnChanges(changes){
    //console.log("diplayChanges -> " , changes);
    //this.selected = this.lista[changes.selection.currentValue.selection];
    this.selected = this.lista[this.selection];
    console.log("SELECTED -> " , this.selected);
  }

  saveMod(){
    this.selected.description = this.mod.description;
    this.selected.elType = this.mod.elType;
    this.editable = !this.editable;
  }

}
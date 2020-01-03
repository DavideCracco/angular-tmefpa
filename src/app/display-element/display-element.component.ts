import { Component, Input, OnInit } from '@angular/core';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'app-display-element',
  templateUrl: './display-element.component.html',
  styleUrls: ['./display-element.component.css']
})
export class DisplayElementComponent implements OnInit {
  @Input() lista = [];
  @Input() selection;
  elements = [];
  selected: ElementComponent;

  constructor() {

   }

  ngOnInit() {
    for(var i = 0; i < this.lista.length; i++){      
      let el = new ElementComponent();
      el.name = this.lista[i];
      this.elements.push(el);
    }

    this.selected = this.elements[this.elements.indexOf(this.selection)];

  }

  showElement(selector){

  }

}
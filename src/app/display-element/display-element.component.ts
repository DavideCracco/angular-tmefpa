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

  constructor() {
   }

  ngOnInit() {
    let el = new ElementComponent();
    this.lista.push(el);
  }

  ngOnChanges(changes){
    console.log("changes -> " , changes);
    this.selected = this.lista[changes.selection.currentValue.selection];
    console.log("selected -> " , this.selected);
  }

}
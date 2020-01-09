import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ElementComponent } from '../element/element.component';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-display-element',
  templateUrl: './display-element.component.html',
  styleUrls: ['./display-element.component.css'],
  providers: [ BusService ]
})
export class DisplayElementComponent implements OnInit {
  @Input() lista = [];
  @Input() selection;
  selected: ElementComponent;
  mod: ElementComponent;
  editable = false;
  private url = "https://elements-b73d.restdb.io/media";

  constructor(private busService: BusService) {
   //this.mod = new ElementComponent("", "", "", "https://static.thenounproject.com/png/340719-200.png");
   // this.selected = new ElementComponent("", "", "", "https://static.thenounproject.com/png/340719-200.png");
   
   this.mod = new ElementComponent();
   this.selected = new ElementComponent();
  }

  ngOnInit() {/*
    let el = new ElementComponent();
    el.name = "Banana"
    el.description = "E' un frutto."
    el.elType = "B";
    this.lista.push(el);*/
    this.selected = this.lista[this.selection.selection];
  }

  ngOnChanges(changes){
    //console.log("Display -> " , this.selection.selection);
    //console.log("ListaDisplay -> " , this.lista);
    if(this.lista != undefined){
      if(this.selection.selection != undefined)
        this.selected = this.lista[this.selection.selection];
      else{
        this.selected = this.lista[0];
      }
    }
  }

  saveMod(){
    //console.log("MOD -> " , this.mod);
    this.selected.description = this.mod.description;
    this.selected.elType = this.mod.elType;
    this.editable = !this.editable;
    this.busService.updateThings( this.selected )
      .subscribe(things => {});
  }

}
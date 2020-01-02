import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ControllerComponent } from './controller/controller.component';
import { ListaComponent } from './lista/lista.component';
import { BusService } from './bus.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ControllerComponent, ListaComponent],
  bootstrap:    [ AppComponent ],
  providers: [BusService]
})
export class AppModule { }

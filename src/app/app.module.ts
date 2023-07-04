import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Agrega esta línea
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistenciaComponent } from './resistencia/resistencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculoResistenciaModule } from './resistencia/calculo-resistencia/calculo-resistencia.module';
import { DistanciaComponent } from './Tarea/distancia/distancia.component';
import { CineComponent } from './cine/cine.component';
import { MenuComponent } from './menu/menu.component';
import { PizzaComponent } from './pizza/pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    ResistenciaComponent,
    DistanciaComponent,
    CineComponent,
    MenuComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule
    CalculoResistenciaModule,
    HttpClientModule // Agrega esta línea

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

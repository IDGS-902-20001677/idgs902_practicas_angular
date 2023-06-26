import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistenciaComponent } from './resistencia/resistencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculoResistenciaModule } from './resistencia/calculo-resistencia/calculo-resistencia.module';
import { DistanciaComponent } from './Tarea/distancia/distancia.component';
import { CineComponent } from './cine/cine.component';

@NgModule({
  declarations: [
    AppComponent,
    ResistenciaComponent,
    DistanciaComponent,
    CineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalculoResistenciaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

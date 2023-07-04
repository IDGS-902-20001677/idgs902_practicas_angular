import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResistenciaComponent } from "./resistencia/resistencia.component";
import { CineComponent } from "./cine/cine.component";
import { DistanciaComponent } from "./Tarea/distancia/distancia.component";
import { PizzaComponent } from "./pizza/pizza.component";


const routes: Routes = [
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'Resistencia', component: ResistenciaComponent},
  {path:'Cine', component: CineComponent},
  {path:'Distancia', component: DistanciaComponent},
  {path:'Pizza', component: PizzaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

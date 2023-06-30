import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// import { NgModule } from "@angular/core";

// import { RouterModule, Routes } from "@angular/router";
// import { AlumnoReactiveComponent } from "./formularios/alumno-reactive/alumno-reactive.component";
// import { IricComponent } from "./utl/iric/iric.component";

// const routes:Routes=[
//   {path:'', redirectTo:'/home', pathMatch:'full'},
//   {path:'AlatAlum', component: AlumnoReactiveComponent},
//   {path:'IRIC', component: IricComponent},

// ]
// @NgModule
// ({
//   imports:[RouterModule.forRoot(routes)],
//   exports:[RouterModule]
// })
// export class AppRoutingModule{}
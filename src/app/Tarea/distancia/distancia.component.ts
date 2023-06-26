import { Component } from '@angular/core';


@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  X1:number=0;
  X2:number=0;
  Y1:number=0;
  Y2:number=0;
  resultado:number=0;

  sumar(){
    this.resultado = Math.sqrt((this.X2 - this.X1)*(this.X2 - this.X1)+(this.Y2 - this.Y1)*(this.Y2 - this.Y1));  }
}

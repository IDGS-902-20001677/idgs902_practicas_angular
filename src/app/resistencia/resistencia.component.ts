import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
  color1:string='';
  color2:string='';
  color3:string='';
  rb:string='';
  resultado:number=0;
  resultadomax:number=0;
  resultadomin:number=0;


  
    
  // calcular() {
  //   let color1Value: string="";
  //   let color2Value: string="";
  //   let color3Value: number=0;
  
  //   if (this.color1 == "Negro") {
  //     color1Value = "0";
  //   } else if (this.color1 == "Café") {
  //     color1Value = "1";
  //   } else if (this.color1 == "Rojo") {
  //     color1Value = "2";
  //   } else if (this.color1 == "Naranja") {
  //     color1Value = "3";
  //   } else if (this.color1 == "Amarillo") {
  //     color1Value = "4";
  //   } else if (this.color1 == "Verde") {
  //     color1Value = "5";
  //   } else if (this.color1 == "Azul") {
  //     color1Value = "6";
  //   } else if (this.color1 == "Morado") {
  //     color1Value = "7";
  //   } else if (this.color1 == "Gris") {
  //     color1Value = "8";
  //   } else if (this.color1 == "Blanco") {
  //     color1Value = "9";
  //   }

  //   if (this.color2 == "Negro") {
  //     color2Value = "0";
  //   } else if (this.color2 == "Café") {
  //     color2Value = "1";
  //   } else if (this.color2 == "Rojo") {
  //     color2Value = "2";
  //   } else if (this.color2 == "Naranja") {
  //     color2Value = "3";
  //   } else if (this.color2 == "Amarillo") {
  //     color2Value = "4";
  //   } else if (this.color2 == "Verde") {
  //     color2Value = "5";
  //   } else if (this.color2 == "Azul") {
  //     color2Value = "6";
  //   } else if (this.color2 == "Morado") {
  //     color2Value = "7";
  //   } else if (this.color2 == "Gris") {
  //     color2Value = "8";
  //   } else if (this.color2 == "Blanco") {
  //     color2Value = "9";
  //   }

  //   if (this.color3 == "Negro") {
  //     color3Value = 1;
  //   } else if (this.color3 == "Café") {
  //     color3Value = 10;
  //   } else if (this.color3 == "Rojo") {
  //     color3Value = 100;
  //   } else if (this.color3 == "Naranja") {
  //     color3Value = 1000;
  //   } else if (this.color3 == "Amarillo") {
  //     color3Value = 10000;
  //   } else if (this.color3 == "Verde") {
  //     color3Value = 100000;
  //   } else if (this.color3 == "Azul") {
  //     color3Value = 1000000;
  //   } else if (this.color3 == "Morado") {
  //     color3Value = 10000000;
  //   } else if (this.color3 == "Gris") {
  //     color3Value = 100000000;
  //   } else if (this.color3 == "Blanco") {
  //     color3Value = 1000000000;
  //   }
    
    
  //   this.resultado = (parseInt(color1Value)+parseInt(color2Value)) * color3Value;
  
  // }
  calcular() {
    let color1Value: string = "";
    let color2Value: string = "";
    let color3Value: number = 0;
    let rbValue: number = 0;
  
    if (this.color1 == "Negro") {
      color1Value = "0";
    } else if (this.color1 == "Café") {
      color1Value = "1";
    } else if (this.color1 == "Rojo") {
      color1Value = "2";
    } else if (this.color1 == "Naranja") {
      color1Value = "3";
    } else if (this.color1 == "Amarillo") {
      color1Value = "4";
    } else if (this.color1 == "Verde") {
      color1Value = "5";
    } else if (this.color1 == "Azul") {
      color1Value = "6";
    } else if (this.color1 == "Morado") {
      color1Value = "7";
    } else if (this.color1 == "Gris") {
      color1Value = "8";
    } else if (this.color1 == "Blanco") {
      color1Value = "9";
    }
  
    if (this.color2 == "Negro") {
      color2Value = "0";
    } else if (this.color2 == "Café") {
      color2Value = "1";
    } else if (this.color2 == "Rojo") {
      color2Value = "2";
    } else if (this.color2 == "Naranja") {
      color2Value = "3";
    } else if (this.color2 == "Amarillo") {
      color2Value = "4";
    } else if (this.color2 == "Verde") {
      color2Value = "5";
    } else if (this.color2 == "Azul") {
      color2Value = "6";
    } else if (this.color2 == "Morado") {
      color2Value = "7";
    } else if (this.color2 == "Gris") {
      color2Value = "8";
    } else if (this.color2 == "Blanco") {
      color2Value = "9";
    }
  
    if (this.color3 == "Negro") {
      color3Value = 1;
    } else if (this.color3 == "Café") {
      color3Value = 10;
    } else if (this.color3 == "Rojo") {
      color3Value = 100;
    } else if (this.color3 == "Naranja") {
      color3Value = 1000;
    } else if (this.color3 == "Amarillo") {
      color3Value = 10000;
    } else if (this.color3 == "Verde") {
      color3Value = 100000;
    } else if (this.color3 == "Azul") {
      color3Value = 1000000;
    } else if (this.color3 == "Morado") {
      color3Value = 10000000;
    } else if (this.color3 == "Gris") {
      color3Value = 100000000;
    } else if (this.color3 == "Blanco") {
      color3Value = 1000000000;
    }
  
    if (this.rb == "1") {
      rbValue = 0.05;
    }else{
      rbValue = 0.1;
    }

    this.resultado = parseInt((color1Value) + (color2Value)) * color3Value;
    console.log(this.color1)
    console.log(this.color2)
    console.log(this.color3)
    this.resultadomax=this.resultado*rbValue;
    this.resultadomin=this.resultado*rbValue;

  }
  
  
}

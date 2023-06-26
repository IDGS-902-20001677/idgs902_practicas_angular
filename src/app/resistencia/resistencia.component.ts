import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
  color1: string = '';
  color2: string = '';
  color3: string = '';
  rb: string = '';
  resultado: number = 0;
  resultadomax: number = 0;
  resultadomin: number = 0;
  styleColor1: string = '';
  styleColor2: string = '';
  styleColor3: string = '';

  calcular() {
    let color1Value: string = '';
    let color2Value: string = '';
    let color3Value: number = 0;
    let rbValue: number = 0;

    if (this.color1 === 'Negro') {
      color1Value = '0';
      this.styleColor1 = 'black';
    } else if (this.color1 === 'Café') {
      color1Value = '1';
      this.styleColor1 = 'brown';
    } else if (this.color1 === 'Rojo') {
      color1Value = '2';
      this.styleColor1 = 'red';
    } else if (this.color1 === 'Naranja') {
      color1Value = '3';
      this.styleColor1 = 'orange';
    } else if (this.color1 === 'Amarillo') {
      color1Value = '4';
      this.styleColor1 = 'yellow';
    } else if (this.color1 === 'Verde') {
      color1Value = '5';
      this.styleColor1 = 'green';
    } else if (this.color1 === 'Azul') {
      color1Value = '6';
      this.styleColor1 = 'blue';
    } else if (this.color1 === 'Morado') {
      color1Value = '7';
      this.styleColor1 = 'purple';
    } else if (this.color1 === 'Gris') {
      color1Value = '8';
      this.styleColor1 = 'gray';
    } else if (this.color1 === 'Blanco') {
      color1Value = '9';
      this.styleColor1 = 'white';
    }

    if (this.color2 === 'Negro') {
      color2Value = '0';
      this.styleColor2 = 'black';
    } else if (this.color2 === 'Café') {
      color2Value = '1';
      this.styleColor2 = 'brown';
    } else if (this.color2 === 'Rojo') {
      color2Value = '2';
      this.styleColor2 = 'red';
    } else if (this.color2 === 'Naranja') {
      color2Value = '3';
      this.styleColor2 = 'orange';
    } else if (this.color2 === 'Amarillo') {
      color2Value = '4';
      this.styleColor2 = 'yellow';
    } else if (this.color2 === 'Verde') {
      color2Value = '5';
      this.styleColor2 = 'green';
    } else if (this.color2 === 'Azul') {
      color2Value = '6';
      this.styleColor2 = 'blue';
    } else if (this.color2 === 'Morado') {
      color2Value = '7';
      this.styleColor2 = 'purple';
    } else if (this.color2 === 'Gris') {
      color2Value = '8';
      this.styleColor2 = 'gray';
    } else if (this.color2 === 'Blanco') {
      color2Value = '9';
      this.styleColor2 = 'white';
    }

    if (this.color3 === 'Negro') {
      color3Value = 1;
      this.styleColor3 = 'black';
    } else if (this.color3 === 'Café') {
      color3Value = 10;
      this.styleColor3 = 'brown';
    } else if (this.color3 === 'Rojo') {
      color3Value = 100;
      this.styleColor3 = 'red';
    } else if (this.color3 === 'Naranja') {
      color3Value = 1000;
      this.styleColor3 = 'orange';
    } else if (this.color3 === 'Amarillo') {
      color3Value = 10000;
      this.styleColor3 = 'yellow';
    } else if (this.color3 === 'Verde') {
      color3Value = 100000;
      this.styleColor3 = 'green';
    } else if (this.color3 === 'Azul') {
      color3Value = 1000000;
      this.styleColor3 = 'blue';
    } else if (this.color3 === 'Morado') {
      color3Value = 10000000;
      this.styleColor3 = 'purple';
    } else if (this.color3 === 'Gris') {
      color3Value = 100000000;
      this.styleColor3 = 'gray';
    } else if (this.color3 === 'Blanco') {
      color3Value = 1000000000;
      this.styleColor3 = 'white';
    }

    if (this.rb === '5%') {
      rbValue = 0.05;
    } else {
      rbValue = 0.1;
    }

    this.resultado = parseInt(color1Value + color2Value) * color3Value;
    console.log(this.color1);
    console.log(this.color2);
    console.log(this.color3);
    this.resultadomax = this.resultado + this.resultado * rbValue;
    this.resultadomin = this.resultado - this.resultado * rbValue;
  }

  actualizarColor1() {
    this.styleColor1 = this.obtenerColorFondo(this.color1);
    this.calcular();
  }

  actualizarColor2() {
    this.styleColor2 = this.obtenerColorFondo(this.color2);
    this.calcular();
  }

  actualizarColor3() {
    this.styleColor3 = this.obtenerColorFondo(this.color3);
    this.calcular();
  }

  obtenerColorFondo(color: string): string {
    switch (color) {
      case 'Negro':
        return 'black';
      case 'Café':
        return 'brown';
      case 'Rojo':
        return 'red';
      case 'Naranja':
        return 'orange';
      case 'Amarillo':
        return 'yellow';
      case 'Verde':
        return 'green';
      case 'Azul':
        return 'blue';
      case 'Morado':
        return 'purple';
      case 'Gris':
        return 'gray';
      case 'Blanco':
        return 'white';
      default:
        return '';
    }}
}

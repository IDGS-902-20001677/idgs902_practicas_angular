import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {

  cantBol: number = 0;
  cantComp: number = 1;
  persona: string = '';
  rbt: string = 'radioS';
  res: string = '';
  desc: number = 0;

  submitForm() {
    const maxBol = this.cantComp * 7;
    if (this.cantBol <= maxBol) {
      if (this.cantBol > 5) {
        this.desc = 0.15;
      } else if (this.cantBol > 2) {
        this.desc = 0.10;
      } else if (this.cantBol <= 2) {
        this.desc = 0;
      }
      const total = (12 * this.cantBol) - (12 * this.cantBol) * this.desc;

      if (this.rbt === 'radioS') {
        const discountedTotal = total - (total * 0.10);
        this.res = discountedTotal.toFixed(2);
      } else {
        this.res = total.toFixed(2);
      }
    } else {
      this.res = `No puedes comprar más de 7 boletos ${this.persona}`;
    }
  }
}

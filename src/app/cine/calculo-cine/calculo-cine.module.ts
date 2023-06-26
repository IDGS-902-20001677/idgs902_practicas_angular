import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule
  ],
  exports: [
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule
  ]
})
export class CalculoCineModule { }

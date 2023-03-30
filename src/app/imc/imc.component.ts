import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {

  idade : number = 0;
  altura : number = 0;
  peso : number = 0;
  resup : number = 0;

  calcular(){

    this.resup = this.peso / (this.altura * this.altura);

  }

}

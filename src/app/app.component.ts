import { Component } from '@angular/core';
import { Produkty } from './constants/item.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'lab14app';
  produkt = Produkty;
  inwokacja: string =
 `Litwo, Ojczyzno moja! ty jesteś jak zdrowie;
 Ile cię trzeba cenić, ten tylko się dowie,
 Kto cię stracił. Dziś piękność twą w całej ozdobie
 Widzę i opisuję, bo tęsknię po tobie.`;

 liczbyPierwsze: number[] = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
}

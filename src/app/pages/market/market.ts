import {Component} from '@angular/core';

interface Product {
  name: string;
  store: string;
  price: number;
}

@Component({
  selector: 'market',
  standalone: true,
  templateUrl: './market.html',
})
export class Market {
  items: Product[] = [
    {name: 'Leche', store: 'Éxito', price: 4500},
    {name: 'Carne de res', store: 'Carnicería', price: 28000},
    {name: 'Arroz', store: 'D1', price: 6000},
  ];

  get total(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}
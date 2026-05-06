import {Component} from '@angular/core';

interface Expense {
  name: string;
  price: number;
}

@Component({
  selector: 'budget',
  standalone: true,
  templateUrl: './budget.html',
})
export class Budget {
  items: Expense[] = [
    {name: 'Arriendo', price: 1200000},
    {name: 'Servicios', price: 200000},
    {name: 'Internet', price: 80000},
  ];

  paid = 1000000;

  get total(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  get available(): number {
    return this.total - this.paid;
  }
}
import {Component, ChangeDetectionStrategy, input, output} from '@angular/core';
import {Product} from '@interfaces/product';
import {getTimeSince, formatCurrencyCOP} from '@services/time.utils';

@Component({
  selector: 'product-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-card.html',
  host: {'class': 'block'},
})
export class ProductCard {
  product = input.required<Product>();
  edit = output<Product>();

  getTimeSince = getTimeSince;
  formatCurrency = formatCurrencyCOP;
}

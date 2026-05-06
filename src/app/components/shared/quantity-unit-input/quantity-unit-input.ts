import {Component, ChangeDetectionStrategy, input, output} from '@angular/core';

@Component({
  selector: 'quantity-unit-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quantity-unit-input.html',
  host: {'class': 'block'},
})
export class QuantityUnitInput {
  label = input.required<string>();
  quantity = input.required<number>();
  unit = input.required<string>();
  units = input.required<string[]>();
  min = input<number>(0);
  quantityChange = output<number>();
  unitChange = output<string>();

  onQuantityInput(event: Event): void {
    this.quantityChange.emit(+(event.target as HTMLInputElement).value);
  }

  onUnitChange(event: Event): void {
    this.unitChange.emit((event.target as HTMLSelectElement).value);
  }
}

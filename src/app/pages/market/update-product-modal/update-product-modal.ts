import {Component, ChangeDetectionStrategy, input, output, signal, effect} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Product} from '@interfaces/product';
import {getTimeSince, formatCurrencyCOP, formatDate} from '@services/time.utils';
import {getUnidades} from '@services/unidades';
import {ModalSheet} from '@components/shared/modal-sheet/modal-sheet';

@Component({
  selector: 'update-product-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ModalSheet],
  templateUrl: './update-product-modal.html',
})
export class UpdateProductModal {
  product = input.required<Product>();
  save = output<Product>();
  close = output<void>();

  getTimeSince = getTimeSince;
  formatCurrency = formatCurrencyCOP;
  formatDate = formatDate;
  unidades = getUnidades();

  inStock = signal(false);
  quantity = signal(1);
  unidad = signal('Unidad');
  toBuy = signal(false);
  buyQuantity = signal(1);
  buyUnidad = signal('Unidad');
  historyVisible = signal(false);

  constructor() {
    effect(() => {
      const p = this.product();
      this.inStock.set(p.inStock);
      this.quantity.set(p.quantity || 1);
      this.unidad.set(p.unidad);
      this.toBuy.set(p.toBuy);
      this.buyQuantity.set(p.buyQuantity || 1);
      this.buyUnidad.set(p.buyUnidad || 'Unidad');
      this.historyVisible.set(false);
    });
  }

  onSave(): void {
    this.save.emit({
      ...this.product(),
      inStock: this.inStock(),
      quantity: this.quantity(),
      unidad: this.unidad(),
      toBuy: this.toBuy(),
      buyQuantity: this.buyQuantity(),
      buyUnidad: this.buyUnidad(),
    });
  }
}


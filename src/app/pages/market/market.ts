import {Component, signal, computed, ChangeDetectionStrategy} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Product} from '@interfaces/product';
import {formatCurrencyCOP} from '@services/time.utils';
import {SearchBar} from '@components/shared/search-bar/search-bar';
import {ModalSheet} from '@components/shared/modal-sheet/modal-sheet';
import {ProductCard} from '@components/shared/product-card/product-card';
import {UpdateProductModal} from './update-product-modal/update-product-modal';

@Component({
  selector: 'market',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, SearchBar, ModalSheet, ProductCard, UpdateProductModal],
  templateUrl: './market.html',
})
export class Market {
  formatCurrency = formatCurrencyCOP;

  products = signal<Product[]>([
    {id: '1', name: 'Leche', lastPurchase: {store: 'Éxito', price: 4500, date: '2026-04'}, inStock: true, quantity: 6, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '2', name: 'Huevos', lastPurchase: {store: 'Éxito', price: 12000, date: '2026-04'}, inStock: true, quantity: 30, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '3', name: 'Queso', lastPurchase: {store: 'Éxito', price: 8500, date: '2026-04'}, inStock: false, quantity: 0, unidad: 'Unidad', toBuy: true, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '4', name: 'Yogurt', lastPurchase: {store: 'D1', price: 3200, date: '2026-04'}, inStock: true, quantity: 4, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '5', name: 'Mantequilla', lastPurchase: {store: 'Éxito', price: 6800, date: '2026-04'}, inStock: false, quantity: 0, unidad: 'Unidad', toBuy: true, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '6', name: 'Carne de res', lastPurchase: {store: 'Carnicería', price: 28000, date: '2026-04'}, inStock: false, quantity: 0, unidad: 'kg', toBuy: true, buyQuantity: 1, buyUnidad: 'kg'},
    {id: '7', name: 'Pollo', lastPurchase: {store: 'Éxito', price: 15000, date: '2026-04'}, inStock: true, quantity: 1, unidad: 'kg', toBuy: false, buyQuantity: 1, buyUnidad: 'kg'},
    {id: '8', name: 'Pescado', lastPurchase: {store: 'Plaza', price: 18000, date: '2026-04'}, inStock: false, quantity: 0, unidad: 'kg', toBuy: true, buyQuantity: 1, buyUnidad: 'kg'},
    {id: '9', name: 'Jamón', lastPurchase: {store: 'Éxito', price: 9200, date: '2026-04'}, inStock: true, quantity: 1, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '10', name: 'Arroz', lastPurchase: {store: 'D1', price: 6000, date: '2026-04'}, inStock: true, quantity: 2, unidad: 'kg', toBuy: false, buyQuantity: 1, buyUnidad: 'kg'},
    {id: '11', name: 'Pasta', lastPurchase: {store: 'D1', price: 4500, date: '2026-04'}, inStock: true, quantity: 3, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '12', name: 'Frijoles', lastPurchase: {store: 'D1', price: 3500, date: '2026-04'}, inStock: true, quantity: 2, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '13', name: 'Lentejas', lastPurchase: {store: 'D1', price: 3800, date: '2026-04'}, inStock: false, quantity: 0, unidad: 'Unidad', toBuy: true, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '14', name: 'Panela', lastPurchase: {store: 'D1', price: 5500, date: '2026-04'}, inStock: true, quantity: 1, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '15', name: 'Papa', lastPurchase: {store: 'Plaza', price: 2500, date: '2026-04'}, inStock: true, quantity: 5, unidad: 'kg', toBuy: false, buyQuantity: 1, buyUnidad: 'kg'},
    {id: '16', name: 'Cebolla', lastPurchase: {store: 'Plaza', price: 1500, date: '2026-04'}, inStock: true, quantity: 3, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '17', name: 'Tomate', lastPurchase: {store: 'Plaza', price: 4000, date: '2026-04'}, inStock: true, quantity: 4, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '18', name: 'Ajo', lastPurchase: {store: 'Plaza', price: 2000, date: '2026-04'}, inStock: true, quantity: 1, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '19', name: 'Zanahoria', lastPurchase: {store: 'Plaza', price: 1800, date: '2026-04'}, inStock: true, quantity: 4, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '20', name: 'Aguacate', lastPurchase: {store: 'Plaza', price: 2500, date: '2026-04'}, inStock: false, quantity: 0, unidad: 'Unidad', toBuy: true, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '21', name: 'Plátano', lastPurchase: {store: 'Plaza', price: 3000, date: '2026-04'}, inStock: true, quantity: 6, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '22', name: 'Manzana', lastPurchase: {store: 'Plaza', price: 4500, date: '2026-04'}, inStock: false, quantity: 0, unidad: 'Unidad', toBuy: true, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '23', name: 'Jabón de mano', lastPurchase: {store: 'D1', price: 5500, date: '2026-04'}, inStock: true, quantity: 2, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '24', name: 'Jabón de ropa', lastPurchase: {store: 'D1', price: 12000, date: '2026-04'}, inStock: true, quantity: 1, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '25', name: 'Cloro', lastPurchase: {store: 'D1', price: 6500, date: '2026-04'}, inStock: true, quantity: 1, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '26', name: 'Detergente', lastPurchase: {store: 'Éxito', price: 18000, date: '2026-04'}, inStock: false, quantity: 0, unidad: 'Unidad', toBuy: true, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '27', name: 'Azúcar', lastPurchase: {store: 'D1', price: 4500, date: '2026-04'}, inStock: true, quantity: 2, unidad: 'kg', toBuy: false, buyQuantity: 1, buyUnidad: 'kg'},
    {id: '28', name: 'Sal', lastPurchase: {store: 'D1', price: 1500, date: '2026-04'}, inStock: true, quantity: 2, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '29', name: 'Café', lastPurchase: {store: 'Éxito', price: 15000, date: '2026-04'}, inStock: true, quantity: 1, unidad: 'Unidad', toBuy: false, buyQuantity: 1, buyUnidad: 'Unidad'},
    {id: '30', name: 'Aceite', lastPurchase: {store: 'D1', price: 12000, date: '2026-04'}, inStock: false, quantity: 0, unidad: 'l', toBuy: true, buyQuantity: 1, buyUnidad: 'l'},
  ]);

  searchQuery = signal('');
  showOnlyToBuy = signal(false);

  showAddModal = signal(false);
  newProductName = signal('');

  showUpdateModal = signal(false);
  selectedProduct = signal<Product | null>(null);

  filteredProducts = computed(() => {
    let products = this.products();

    if (this.showOnlyToBuy()) {
      products = products.filter(p => p.toBuy);
    }

    const query = this.searchQuery().toLowerCase();
    if (query) {
      products = products.filter(p => p.name.toLowerCase().includes(query));
    }

    return products;
  });

  toBuyCount = computed(() => this.products().filter(p => p.toBuy).length);

  estimatedTotal = computed(() =>
    this.products().filter(p => p.toBuy).reduce((sum, p) => sum + (p.lastPurchase?.price || 0), 0)
  );

  search(): void {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) return;

    const exists = this.products().find(p => p.name.toLowerCase().includes(query));

    if (exists) {
      this.openEditModal(exists);
    } else {
      this.newProductName.set(this.searchQuery().trim());
      this.showAddModal.set(true);
    }
  }

  openEditModal(product: Product): void {
    this.selectedProduct.set(product);
    this.showUpdateModal.set(true);
  }

  addProduct(): void {
    const name = this.newProductName().trim();
    if (!name) return;

    this.products.update(items => [...items, {
      id: crypto.randomUUID(),
      name,
      lastPurchase: null,
      inStock: false,
      quantity: 0,
      unidad: 'Unidad',
      toBuy: false,
      buyQuantity: 1,
      buyUnidad: 'Unidad',
    }]);

    this.closeModals();
    this.searchQuery.set('');
  }

  onProductSave(updated: Product): void {
    this.products.update(items =>
      items.map(p => p.id === updated.id ? updated : p)
    );
    this.closeModals();
    this.searchQuery.set('');
  }

  deleteProduct(id: string): void {
    this.products.update(items => items.filter(p => p.id !== id));
  }

  closeModals(): void {
    this.showAddModal.set(false);
    this.showUpdateModal.set(false);
    this.newProductName.set('');
    this.selectedProduct.set(null);
  }
}

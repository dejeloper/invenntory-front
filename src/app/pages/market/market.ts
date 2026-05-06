import {Component, signal, computed} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {getTimeSince, formatCurrencyCOP, formatDate} from '@services/time.utils';
import {getUnidades} from '@services/unidades';

interface Product {
  id: string;
  name: string;
  lastPurchase: {store: string; price: number; date: string} | null;
  inStock: boolean;
  quantity: number;
  unidad: string;
  toBuy: boolean;
  buyQuantity: number;
  buyUnidad: string;
}

@Component({
  selector: 'market',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './market.html',
})
export class Market {
  getTimeSince = getTimeSince;
  formatCurrency = formatCurrencyCOP;
  formatDate = formatDate;
  unidades = getUnidades();

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

  showAddModal = signal(false);
  newProductName = signal('');

  showOnlyToBuy = signal(false);
  showUpdateModal = signal(false);
  selectedProduct = signal<Product | null>(null);
  updateInStock = signal(true);
  updateQuantity = signal(1);
  updateUnidad = signal('Unidad');
  updateToBuy = signal(false);
  updateBuyQuantity = signal(1);
  updateBuyUnidad = signal('Unidad');

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

  search() {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) return;

    const exists = this.products().find(p => p.name.toLowerCase().includes(query));

    if (exists) {
      this.selectedProduct.set(exists);
      this.updateInStock.set(exists.inStock);
      this.updateQuantity.set(exists.quantity || 1);
      this.updateUnidad.set(exists.unidad);
      this.updateToBuy.set(exists.toBuy);
      this.updateBuyQuantity.set(exists.buyQuantity || 1);
      this.updateBuyUnidad.set(exists.buyUnidad || 'Unidad');
      this.showUpdateModal.set(true);
    } else {
      this.newProductName.set(this.searchQuery().trim());
      this.showAddModal.set(true);
    }
  }

  addProduct() {
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
      buyUnidad: 'Unidad'
    }]);

    this.closeModals();
    this.searchQuery.set('');
  }

  updateProduct() {
    const product = this.selectedProduct();
    if (!product) return;

    this.products.update(items =>
      items.map(p => p.id === product.id ? {
        ...p,
        inStock: this.updateInStock(),
        quantity: this.updateQuantity(),
        unidad: this.updateUnidad(),
        toBuy: this.updateToBuy(),
        buyQuantity: this.updateBuyQuantity(),
        buyUnidad: this.updateBuyUnidad()
      } : p)
    );

    this.closeModals();
    this.searchQuery.set('');
  }

  deleteProduct(id: string) {
    this.products.update(items => items.filter(p => p.id !== id));
  }

  closeModals() {
    this.showAddModal.set(false);
    this.showUpdateModal.set(false);
    this.newProductName.set('');
    this.selectedProduct.set(null);
  }
}
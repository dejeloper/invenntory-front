import {Component, signal, computed, ChangeDetectionStrategy, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Product} from '@interfaces/product';
import {formatCurrencyCOP} from '@services/time.utils';
import {ProductsService} from '@services/products.service';
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
  private productsService = inject(ProductsService);

  formatCurrency = formatCurrencyCOP;

  products = signal<Product[]>([]);

  searchQuery = signal('');
  showOnlyToBuy = signal(false);

  showAddModal = signal(false);
  newProductName = signal('');

  showUpdateModal = signal(false);
  selectedProduct = signal<Product | null>(null);

  filteredProducts = computed(() => {
    // products sorted by name  
    let products = this.products().map(p => p).sort((a, b) => a.name.localeCompare(b.name));

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

  totalBuyQuantity = computed(() =>
    this.products().filter(p => p.toBuy).reduce((sum, p) => sum + p.buyQuantity, 0)
  );

  estimatedTotal = computed(() =>
    this.products().filter(p => p.toBuy).reduce((sum, p) => sum + ((p.lastPurchase?.price || 0) * p.buyQuantity), 0)
  );

  constructor() {
    this.productsService.getProducts().subscribe(products => {
      this.products.set(products);
    });
  }

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
      stockUpdatedAt: null,
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

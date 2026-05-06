export interface Product {
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

import {Product} from '@interfaces/product';

interface ProductsPayload {
	productos?: unknown[];
}

export function mapProductsFromPayload(payload: unknown): Product[] {
	const source = payload as ProductsPayload;
	const rawProducts = Array.isArray(source.productos) ? source.productos : [];

	return rawProducts
		.flatMap((item) => Array.isArray(item) ? item : [item])
		.filter((item): item is Product => isProduct(item));
}

function isProduct(value: unknown): value is Product {
	if (typeof value !== 'object' || value === null) {
		return false;
	}

	const product = value as Partial<Product>;

	return (
		typeof product.id === 'string' &&
		typeof product.name === 'string' &&
		typeof product.inStock === 'boolean' &&
		typeof product.quantity === 'number' &&
		typeof product.unidad === 'string' &&
		typeof product.toBuy === 'boolean' &&
		typeof product.buyQuantity === 'number' &&
		typeof product.buyUnidad === 'string'
	);
}
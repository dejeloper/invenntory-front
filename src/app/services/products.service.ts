import {Injectable, inject} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Product} from '@interfaces/product';
import {MockApiService} from './mock-api.service';

interface ProductsResponse {
	productos: Product[];
}

@Injectable({providedIn: 'root'})
export class ProductsService {
	private mockApi = inject(MockApiService);

	getProducts(): Observable<Product[]> {
		return this.mockApi.get<ProductsResponse>('products', 'getProducts').pipe(
			map((response) => {
				if (!response.success || !response.data) {
					return [];
				}

				return response.data.productos;
			})
		);
	}
}

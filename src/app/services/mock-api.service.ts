import {Injectable} from '@angular/core';
import {Observable, of, delay} from 'rxjs';
import {ApiResponse} from './api.service';
import {mapProductsFromPayload} from '@mappers/product.mapper';
import {mapNotificationsFromPayload} from '@mappers/notifications.mapper';
import notificationsData from './data/notifications.json';
import productsData from './data/productos.json';

@Injectable({providedIn: 'root'})
export class MockApiService {
  get<T>(controller: string, service: string): Observable<ApiResponse<T>> {
    const data = this.getMockData(controller, service);
    return of({success: true, data: data as T}).pipe(delay(300));
  }

  private getMockData(controller: string, service: string): unknown {
    switch (controller) {
      case 'notifications':
        if (service === 'getNotificationsMenu') {
          return mapNotificationsFromPayload(notificationsData);
        }
        return {};
      case 'products':
        if (service === 'getProducts') {
          return {productos: mapProductsFromPayload(productsData)};
        }
        return {};
      default:
        return {};
    }
  }
}
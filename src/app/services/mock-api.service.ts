import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ApiResponse } from './api.service';
import notificationsData from './data/notifications.json';

@Injectable({ providedIn: 'root' })
export class MockApiService {
  get<T>(service: string): Observable<ApiResponse<T>> {
    const data = this.getMockData(service);
    return of({ success: true, data: data as T }).pipe(delay(300));
  }

  private getMockData(service: string): unknown {
    switch (service) {
      case 'getNotificationsMenu':
        return notificationsData;
      default:
        return {};
    }
  }
}
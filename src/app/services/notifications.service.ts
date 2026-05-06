import { Injectable, inject } from '@angular/core';
import { signal } from '@angular/core';
import { MockApiService } from './mock-api.service';
import { INotificationGeneral, INotificationItem } from '../interfaces/notifications';

@Injectable({ providedIn: 'root' })
export class NotificationsService {
  private mockApi = inject(MockApiService);

  notificationsGeneral = signal<INotificationGeneral[]>([]);
  notificationsMenuMarket = signal<INotificationItem[]>([]);
  notificationsMenuBudget = signal<INotificationItem[]>([]);

  initialize() {
    this.mockApi.get<{ notificationsMenuMarket: INotificationItem[], notificationsMenuBudget: INotificationItem[], notificationsGeneral: INotificationGeneral[] }>('getNotificationsMenu')
      .subscribe(response => {
        if (response.success && response.data) {
          this.notificationsGeneral.set(response.data.notificationsGeneral);
          this.notificationsMenuMarket.set(response.data.notificationsMenuMarket);
          this.notificationsMenuBudget.set(response.data.notificationsMenuBudget);
        }
      });
  }

  get notificationsGeneralCount(): number {
    return this.notificationsGeneral().filter(n => !n.read).length;
  }

  get notificationsMenuMarketCount(): number {
    return this.notificationsMenuMarket().reduce((sum, item) => sum + item.number, 0);
  }

  get notificationsMenuBudgetCount(): number {
    return this.notificationsMenuBudget().reduce((sum, item) => sum + item.number, 0);
  }

  get notificationsMenuSettingsCount(): number {
    return this.notificationsGeneralCount;
  }
}
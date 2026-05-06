import {Injectable, inject, signal} from '@angular/core';
import {MockApiService} from './mock-api.service';
import {INotificationItem, INotificationSetting} from '@interfaces/notifications';

@Injectable({providedIn: 'root'})
export class NotificationsService {
  private mockApi = inject(MockApiService);

  notificationsMenuMarket = signal<INotificationItem[]>([]);
  notificationsMenuBudget = signal<INotificationItem[]>([]);
  notificationsMenuSettings = signal<INotificationSetting[]>([]);

  initialize() {
    this.mockApi.get<{notificationsMenuMarket: INotificationItem[], notificationsMenuBudget: INotificationItem[], notificationsMenuSettings: INotificationSetting[]}>('notifications', 'getNotificationsMenu')
      .subscribe(response => {
        if (response.success && response.data) {
          this.notificationsMenuMarket.set(response.data.notificationsMenuMarket);
          this.notificationsMenuBudget.set(response.data.notificationsMenuBudget);
          this.notificationsMenuSettings.set(response.data.notificationsMenuSettings);
        }
      });
  }

  get notificationsGeneralCount(): number {
    const notifSetting = this.notificationsMenuSettings().find(s => s.name === 'Notificaciones');
    return notifSetting?.notificaciones?.filter(n => !n.read).length ?? 0;
  }

  get notificationsMenuMarketCount(): number {
    return this.notificationsMenuMarket().reduce((sum, item) => sum + item.number, 0);
  }

  get notificationsMenuBudgetCount(): number {
    return this.notificationsMenuBudget().reduce((sum, item) => sum + item.number, 0);
  }

  get notificationsMenuSettingsCount(): number {
    let total = 0;
    const settings = this.notificationsMenuSettings();
    for (const setting of settings) {
      if (setting.name === 'Notificaciones') {
        total += setting.notificaciones?.filter(n => !n.read).length ?? 0;
      } else {
        total += setting.number;
      }
    }
    return total;
  }
}
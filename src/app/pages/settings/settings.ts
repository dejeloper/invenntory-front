import {Component, signal, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsService} from '@services/notifications.service';
import {NotificationsSettings} from './notifications/notifications';
import {PrivacySettings} from './privacy/privacy';
import {AppearanceSettings} from './appearance/appearance';
import {AboutSettings} from './about/about';
import {INotificationSetting} from '@interfaces/notifications';
import {BadgeNotification} from '@app/components/shared/badge-notification/badge-notification';

interface SettingsItem {
  id: string;
  icon: string;
}

@Component({
  selector: 'settings',
  standalone: true,
  imports: [
    CommonModule,
    NotificationsSettings,
    PrivacySettings,
    AppearanceSettings,
    AboutSettings,
    BadgeNotification,
  ],
  templateUrl: './settings.html',
})
export class Settings {
  notifications = inject(NotificationsService);

  items = signal<SettingsItem[]>([
    {id: 'notifications', icon: '🔔'},
    {id: 'privacy', icon: '🔒'},
    {id: 'appearance', icon: '🎨'},
    {id: 'about', icon: 'ℹ️'},
  ]);

  expanded = signal<string>('');

  toggle(id: string) {
    this.expanded.update(current => current === id ? '' : id);
  }

  getLabel(id: string): string {
    const labels: Record<string, string> = {
      'notifications': 'Notificaciones',
      'privacy': 'Privacidad',
      'appearance': 'Apariencia',
      'about': 'Acerca de',
    };
    return labels[id] || id;
  }

  getNotificationsMenuSettings(): INotificationSetting[] {
    return this.notifications.notificationsMenuSettings();
  }

  getNotificationBadge(id: string): number {
    const settings = this.getNotificationsMenuSettings();
    switch (id) {
      case 'notifications':
        const notif = settings.find((s: INotificationSetting) => s.name === 'Notificaciones');
        return notif?.notificaciones?.filter(n => !n.read).length ?? 0;
      case 'privacy':
        const privacy = settings.find((s: INotificationSetting) => s.name === 'Privacidad');
        return privacy?.number ?? 0;
      case 'appearance':
        const appearance = settings.find((s: INotificationSetting) => s.name === 'Apariencia');
        return appearance?.number ?? 0;
      case 'about':
        const about = settings.find((s: INotificationSetting) => s.name === 'Acerca de');
        return about?.number ?? 0;
      default:
        return 0;
    }
  }
}
import {Component, signal, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsService} from '../../notifications.service';
import {NotificationsSettings} from './notifications/notifications';
import {PrivacySettings} from './privacy/privacy';
import {AppearanceSettings} from './appearance/appearance';
import {AboutSettings} from './about/about';

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
    if (this.expanded() !== id) {
      this.notifications.markSectionViewed(id);
    }
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
}
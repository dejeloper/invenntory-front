import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsSettingsComponent } from './notifications/notifications.component';
import { PrivacySettingsComponent } from './privacy/privacy.component';
import { AppearanceSettingsComponent } from './appearance/appearance.component';
import { AboutSettingsComponent } from './about/about.component';
import { NotificationsService } from '../../notifications.service';

interface SettingsItem {
  id: string;
  icon: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    NotificationsSettingsComponent,
    PrivacySettingsComponent,
    AppearanceSettingsComponent,
    AboutSettingsComponent,
  ],
  templateUrl: './settings.html',
})
export class SettingsComponent {
  notifications = inject(NotificationsService);

  items = signal<SettingsItem[]>([
    { id: 'notifications', icon: '🔔' },
    { id: 'privacy', icon: '🔒' },
    { id: 'appearance', icon: '🎨' },
    { id: 'about', icon: 'ℹ️' },
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
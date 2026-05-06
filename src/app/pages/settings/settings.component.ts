import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsSettingsComponent } from './notifications/notifications.component';
import { PrivacySettingsComponent } from './privacy/privacy.component';
import { AppearanceSettingsComponent } from './appearance/appearance.component';
import { AboutSettingsComponent } from './about/about.component';

interface SettingsItem {
  id: string;
  label: string;
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
  items = signal<SettingsItem[]>([
    { id: 'notifications', label: 'Notifications' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'appearance', label: 'Appearance' },
    { id: 'about', label: 'About' },
  ]);

  expanded = signal<string>('notifications');

  toggle(id: string) {
    this.expanded.update(current => current === id ? '' : id);
  }
}
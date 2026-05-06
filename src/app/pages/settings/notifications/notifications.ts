import {Component, inject} from '@angular/core';
import {NotificationsService} from '@services/notifications.service';

@Component({
  selector: 'notifications-settings',
  standalone: true,
  templateUrl: './notifications.html',
})
export class NotificationsSettings {
  private notificationsService = inject(NotificationsService);

  getNotifications() {
    const setting = this.notificationsService.notificationsMenuSettings()
      .find(s => s.name === 'Notificaciones');
    return setting?.notificaciones ?? [];
  }
}
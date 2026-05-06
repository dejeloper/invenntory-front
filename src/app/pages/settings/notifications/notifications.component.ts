import { Component, signal } from '@angular/core';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

@Component({
  selector: 'app-notifications-settings',
  standalone: true,
  template: `
    <div class="bg-pure-white rounded-xl overflow-hidden border border-border-silver">
      @for (notif of notifications(); track notif.id) {
        <div 
          class="flex items-start gap-3 px-4 py-3 border-b border-border-silver last:border-b-0"
          [class.bg-interactive-blue/5]="!notif.read"
        >
          <div class="w-2 h-2 mt-2 rounded-full bg-interactive-blue" [class.opacity-0]="notif.read"></div>
          <div class="flex-1">
            <p class="text-base font-medium">{{ notif.title }}</p>
            <p class="text-xs text-medium-gray">{{ notif.message }}</p>
            <p class="text-xs text-light-gray mt-1">{{ notif.time }}</p>
          </div>
        </div>
      }
    </div>
  `,
})
export class NotificationsSettingsComponent {
  notifications = signal<Notification[]>([
    { id: 1, title: 'Recordatorio de compra', message: 'No olvides comprar leche', time: '2 min', read: false },
    { id: 2, title: 'Alerta de presupuesto', message: 'Te quedan $50.000 disponibles', time: '1 hora', read: false },
    { id: 3, title: 'Bienvenido', message: 'Gracias por usar Invenntory', time: 'Ayer', read: true },
    { id: 4, title: 'Actualización disponible', message: 'Nueva versión lista', time: 'Ayer', read: true },
  ]);
}
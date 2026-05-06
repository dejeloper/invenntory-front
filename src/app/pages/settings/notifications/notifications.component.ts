import {Component, signal} from '@angular/core';

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
  templateUrl: './notifications.html',
})
export class NotificationsSettingsComponent {
  notifications = signal<Notification[]>([
    {id: 1, title: 'Recordatorio de compra', message: 'No olvides comprar leche', time: '2 min', read: false},
    {id: 2, title: 'Alerta de presupuesto', message: 'Te quedan $50.000 disponibles', time: '1 hora', read: false},
    {id: 3, title: 'Bienvenido', message: 'Gracias por usar Invenntory', time: 'Ayer', read: true},
    {id: 4, title: 'Actualización disponible', message: 'Nueva versión lista', time: 'Ayer', read: true},
  ]);
}
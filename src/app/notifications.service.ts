import { Injectable, signal } from '@angular/core';

export interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

@Injectable({ providedIn: 'root' })
export class NotificationsService {
  private notifications = signal<Notification[]>([
    { id: 1, title: 'Recordatorio de compra', message: 'No olvides comprar leche', time: '2 min', read: false },
    { id: 2, title: 'Alerta de presupuesto', message: 'Te quedan $50.000 disponibles', time: '1 hora', read: false },
    { id: 3, title: 'Bienvenido', message: 'Gracias por usar Invenntory', time: 'Ayer', read: true },
    { id: 4, title: 'Actualización disponible', message: 'Nueva versión lista', time: 'Ayer', read: true },
  ]);

  private viewedSections = signal<Record<string, boolean>>({
    'notifications': false,
    'privacy': false,
    'appearance': false,
    'about': false,
  });

  get allNotifications() {
    return this.notifications;
  }

  get unreadCount() {
    return this.notifications().filter(n => !n.read).length;
  }

  markAsRead(id: number) {
    this.notifications.update(items => 
      items.map(n => n.id === id ? { ...n, read: true } : n)
    );
  }

  markSectionViewed(section: string) {
    this.viewedSections.update(viewed => ({
      ...viewed,
      [section]: true
    }));
  }

  isSectionUnviewed(section: string): boolean {
    return !this.viewedSections()[section];
  }

  getSectionBadge(section: string): number {
    if (section === 'notifications') {
      return this.unreadCount;
    }
    return this.isSectionUnviewed(section) ? 1 : 0;
  }

  getSettingsBadge(): number {
    const viewed = this.viewedSections();
    const unreadNotifications = this.unreadCount;
    const unviewedSections = Object.entries(viewed)
      .filter(([key, value]) => key !== 'notifications' && !value)
      .length;
    return unreadNotifications + unviewedSections;
  }

  getBudgetBadge(): number {
    return 0;
  }

  getMarketBadge(): number {
    return this.unreadCount;
  }
}
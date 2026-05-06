export interface INotificationItem {
  name: string;
  number: number;
}

export interface INotificationSetting {
  name: string;
  number: number;
  notificaciones?: INotificationGeneral[];
}

export interface INotificationsMenu {
  notificationsMenuMarket: INotificationItem[];
  notificationsMenuBudget: INotificationItem[];
  notificationsMenuSettings: INotificationSetting[];
}

export interface INotificationGeneral {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}
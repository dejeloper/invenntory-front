export interface INotificationItem {
	name: string;
	number: number;
}

export interface INotificationsMenu {
	notificationsMenuMarket: INotificationItem[];
	notificationsMenuBudget: INotificationItem[];
	notificationsGeneral: INotificationGeneral[];
}

export interface INotificationGeneral {
	id: number;
	title: string;
	message: string;
	time: string;
	read: boolean;
}
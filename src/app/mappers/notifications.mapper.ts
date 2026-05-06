import {
	INotificationGeneral,
	INotificationItem,
	INotificationSetting,
	INotificationsMenu,
} from '@interfaces/notifications';

export function mapNotificationsFromPayload(payload: unknown): INotificationsMenu {
	const source = payload as Partial<INotificationsMenu>;

	return {
		notificationsMenuMarket: mapItems(source.notificationsMenuMarket),
		notificationsMenuBudget: mapItems(source.notificationsMenuBudget),
		notificationsMenuSettings: mapSettings(source.notificationsMenuSettings),
	};
}

function mapItems(value: unknown): INotificationItem[] {
	if (!Array.isArray(value)) {
		return [];
	}

	return value.filter((item): item is INotificationItem => isNotificationItem(item));
}

function mapSettings(value: unknown): INotificationSetting[] {
	if (!Array.isArray(value)) {
		return [];
	}

	return value
		.filter((setting): setting is Partial<INotificationSetting> => isRecord(setting))
		.map((setting) => {
			const hasValidNumber = typeof setting.number === 'number';
			const notifications = mapGeneralNotifications(setting.notificaciones);

			return {
				name: typeof setting.name === 'string' ? setting.name : '',
				number: hasValidNumber ? setting.number : notifications.length,
				notificaciones: notifications.length > 0 ? notifications : undefined,
			};
		})
		.filter((setting) => setting.name.length > 0);
}

function mapGeneralNotifications(value: unknown): INotificationGeneral[] {
	if (!Array.isArray(value)) {
		return [];
	}

	return value.filter((item): item is INotificationGeneral => isNotificationGeneral(item));
}

function isNotificationItem(value: unknown): value is INotificationItem {
	if (!isRecord(value)) {
		return false;
	}

	return typeof value.name === 'string' && typeof value.number === 'number';
}

function isNotificationGeneral(value: unknown): value is INotificationGeneral {
	if (!isRecord(value)) {
		return false;
	}

	return (
		typeof value.id === 'number' &&
		typeof value.title === 'string' &&
		typeof value.message === 'string' &&
		typeof value.time === 'string' &&
		typeof value.read === 'boolean'
	);
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null;
}
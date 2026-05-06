import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {BadgeNotification} from '@app/components/shared/badge-notification/badge-notification';
import {NotificationsService} from '@services/notifications.service';

@Component({
	selector: 'app-footer',
	imports: [RouterLink, RouterLinkActive, BadgeNotification],
	templateUrl: './footer.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
	readonly notifications: NotificationsService = inject(NotificationsService);
}
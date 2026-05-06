import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NotificationsService} from '../../services/notifications.service';
import {BadgeNotificationComponent} from '../../components/shared/badge';

@Component({
	selector: 'app-footer',
	imports: [RouterLink, RouterLinkActive, BadgeNotificationComponent],
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
	notifications = inject(NotificationsService);
}
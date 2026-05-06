import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NotificationsService } from '@services/notifications.service';
import { FooterButton } from '@app/components/shared/footer-button/footer-button';

@Component({
	selector: 'app-footer',
	imports: [FooterButton],
	templateUrl: './footer.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
	readonly notifications: NotificationsService = inject(NotificationsService);
}
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NotificationsService} from '../../notifications.service';

@Component({
	selector: 'app-footer',
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	notifications = inject(NotificationsService);
}

import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
	appName = import.meta.env.NG_APP_NAME as string;
}

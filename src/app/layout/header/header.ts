import {ChangeDetectionStrategy, Component} from '@angular/core';
import {appConfig} from '@app/config';

@Component({
	selector: 'app-header',
	templateUrl: './header.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
	appName = appConfig.name;
}

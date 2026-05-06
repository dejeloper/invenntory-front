import {ChangeDetectionStrategy, Component} from '@angular/core';
import {appConfig} from '../../config';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
	appName = appConfig.name;
}

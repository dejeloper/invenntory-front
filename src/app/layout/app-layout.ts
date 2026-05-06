import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {Header} from './header/header';
import {Footer} from './footer/footer';
import {Toast} from '@app/services/toast';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayout {
  toast = inject(Toast);
}
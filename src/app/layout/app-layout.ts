import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ToastController} from '../toast.service';
import {Header} from './header/header';
import {Footer} from './footer/footer';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayout {
  toast = inject(ToastController);
}
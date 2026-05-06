import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ToastController} from '../toast.service';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayout {
  toast = inject(ToastController);
}
import {Component, input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {BadgeNotification} from '@app/components/shared/badge-notification/badge-notification';

@Component({
  selector: 'footer-button',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, BadgeNotification],
  templateUrl: './footer-button.html',
})
export class FooterButton {
  icon = input.required<string>();
  label = input.required<string>();
  route = input.required<string>();
  badge = input<number>(0);
}
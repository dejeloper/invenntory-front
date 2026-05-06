import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'badge-notification',
  standalone: true,
  imports: [NgClass],
  templateUrl: './badge-notification.html',
})
export class BadgeNotification {
  count = input.required<number>();
  ariaLabel = input<string>('');
  inline = input<boolean>(false);
}
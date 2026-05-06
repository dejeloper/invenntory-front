import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NotificationsService} from './services/notifications.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class App implements OnInit {
  notifications = inject(NotificationsService);

  ngOnInit() {
    this.notifications.initialize();
  }
}

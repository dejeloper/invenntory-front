import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { appConfig } from '../config';
import { ToastController } from '../toast.service';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app-layout.html',
})
export class AppLayout {
  appName = appConfig.name;
  toast = inject(ToastController);
  notifications = inject(NotificationsService);
}
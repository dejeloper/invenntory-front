import { Component, inject } from '@angular/core';
import { ToastController } from '../../../toast.service';

@Component({
  selector: 'app-appearance-settings',
  standalone: true,
  templateUrl: './appearance.html',
})
export class AppearanceSettingsComponent {
  private toast = inject(ToastController);

  showNoPermission() {
    this.toast.show('No tiene permisos para modificar');
  }
}
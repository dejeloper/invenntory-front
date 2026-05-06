import {Component, inject} from '@angular/core';
import {ToastController} from '../../../toast.service';

@Component({
  selector: 'appearance-settings',
  standalone: true,
  templateUrl: './appearance.html',
})
export class AppearanceSettings {
  private toast = inject(ToastController);

  showNoPermission() {
    this.toast.show('No tiene permisos para modificar');
  }
}
import {Component, inject} from '@angular/core';
import {Toast} from '@services/toast';

@Component({
  selector: 'appearance-settings',
  standalone: true,
  templateUrl: './appearance.html',
})
export class AppearanceSettings {
  private toast = inject(Toast);

  showNoPermission() {
    this.toast.show('No tiene permisos para modificar');
  }
}
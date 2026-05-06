import { Component, inject } from '@angular/core';
import { ToastController } from '../../../toast.service';

@Component({
  selector: 'app-appearance-settings',
  standalone: true,
  template: `
    <div class="bg-pure-white rounded-xl overflow-hidden border border-border-silver">
      <div 
        class="flex justify-between items-center px-4 py-3 border-b border-border-silver"
      >
        <span>Tema</span>
        <span class="text-medium-gray">Claro</span>
      </div>
      <button 
        (click)="showNoPermission()"
        class="w-full flex justify-between items-center px-4 py-3 text-left"
      >
        <span>Modo oscuro</span>
        <span class="text-medium-gray">›</span>
      </button>
    </div>
  `,
})
export class AppearanceSettingsComponent {
  private toast = inject(ToastController);

  showNoPermission() {
    this.toast.show('No tiene permisos para modificar');
  }
}
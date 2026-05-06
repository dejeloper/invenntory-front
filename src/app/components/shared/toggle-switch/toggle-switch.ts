import {Component, ChangeDetectionStrategy, input, output} from '@angular/core';

@Component({
  selector: 'toggle-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toggle-switch.html',
  host: {'class': 'block'},
})
export class ToggleSwitch {
  label = input.required<string>();
  value = input.required<boolean>();
  activeColor = input<string>('bg-gray-700');
  offColor = input<string>('bg-gray-300');
  valueChange = output<boolean>();
}

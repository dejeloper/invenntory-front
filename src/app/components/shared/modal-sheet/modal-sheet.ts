import {Component, ChangeDetectionStrategy, input, output} from '@angular/core';

@Component({
  selector: 'modal-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal-sheet.html',
})
export class ModalSheet {
  ariaLabel = input<string>('');
  cardClass = input<string>('bg-pure-white rounded-xl p-6 w-full max-w-sm');
  close = output<void>();
}

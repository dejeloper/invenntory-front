import {Component, ChangeDetectionStrategy, input, output} from '@angular/core';

@Component({
  selector: 'search-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-bar.html',
  host: {'class': 'block'},
})
export class SearchBar {
  value = input<string>('');
  placeholder = input<string>('Buscar...');
  valueChange = output<string>();
  search = output<void>();
}

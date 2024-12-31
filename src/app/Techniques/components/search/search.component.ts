import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchBar: FormControl;
  @Output() searchTechnique = new EventEmitter<string>();

  constructor() {
    this.searchBar = new FormControl('');
  }

  OnSearchTerm(): void {
    this.searchTechnique.emit(this.searchBar.value);
  }

  clearSearchBar(): void {
    this.searchBar.setValue('');
    this.searchTechnique.emit('');
  }
}

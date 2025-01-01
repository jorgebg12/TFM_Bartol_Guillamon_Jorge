import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import * as TechniquesActions from '../../actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchBar: FormControl;
  @Output() searchTechnique = new EventEmitter<string>();

  constructor(private store: Store<AppState>) {
    this.searchBar = new FormControl('');
  }

  OnSearchTerm(): void {
    // this.searchTechnique.emit(this.searchBar.value);

    this.store.dispatch(
      TechniquesActions.filterTechniquesByName({
        userInput: this.searchBar.value,
      })
    );
  }

  clearSearchBar(): void {
    this.searchBar.setValue('');
    this.searchTechnique.emit('');
  }
}

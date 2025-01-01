import { Component } from '@angular/core';
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

  constructor(private store: Store<AppState>) {
    this.searchBar = new FormControl('');
  }

  OnSearchTerm(): void {
    this.store.dispatch(
      TechniquesActions.filterTechniquesByName({
        userInput: this.searchBar.value,
      })
    );
  }

  clearSearchBar(): void {
    this.searchBar.setValue('');
    this.OnSearchTerm();
  }
}

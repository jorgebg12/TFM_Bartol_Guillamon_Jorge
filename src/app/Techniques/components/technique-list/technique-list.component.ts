import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { TechniqueDTO } from '../../../Models/technique.dto';
import * as TechniquesActions from '../../actions';
@Component({
  selector: 'app-technique-list',
  templateUrl: './technique-list.component.html',
  styleUrl: './technique-list.component.scss',
})
export class TechniqueListComponent implements OnInit, OnDestroy {
  showFilter = false;
  techniqueList: TechniqueDTO[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('techniques').subscribe((state) => {
      this.techniqueList = state.filteredTechniques;
    });
    this.LoadPositions();
  }
  ngOnDestroy(): void {}

  TechniqueHandler(type: string) {
    if (type === 'Atack') {
      this.LoadAtacks();
      return;
    } else if (type === 'Defense') {
      this.LoadDefenses();
      return;
    } else if (type === 'Position') {
      this.LoadPositions();
      return;
    } else if (type === 'Pum') {
      this.LoadPum();
      return;
    }
  }

  LoadAtacks(): void {
    this.store.dispatch(TechniquesActions.getAllAtacks());
  }

  LoadDefenses(): void {
    this.store.dispatch(TechniquesActions.getAllDefenses());
  }

  LoadPositions(): void {
    this.store.dispatch(TechniquesActions.getAllPositions());
  }

  LoadPum(): void {
    this.store.dispatch(TechniquesActions.getAllPum());
  }

  toggleSidenav() {
    this.showFilter = !this.showFilter;
  }
}

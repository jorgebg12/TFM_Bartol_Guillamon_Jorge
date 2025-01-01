import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { Belt } from '../../../Models/technique.dto';
import * as TechniquesActions from '../../actions';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit {
  currentBelt: Belt | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('techniques').subscribe((state) => {
      this.currentBelt = state.filterBelt;
    });
  }

  onBeltChange(belt: string | null): void {
    const selectedBelt = belt as Belt;
    this.store.dispatch(
      TechniquesActions.filterTechniquesByBelt({ userBelt: selectedBelt })
    );
  }
}

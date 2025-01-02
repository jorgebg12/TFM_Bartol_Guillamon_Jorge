import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { Belt, TechniqueDTO } from '../../../Models/technique.dto';
import { UserDTO } from '../../../Models/user.dto';

import * as TechniquesActions from '../../actions';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  belts = Belt;
  @Input() technique!: TechniqueDTO;
  user: UserDTO | null = null;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.select('auth').subscribe((state) => {
      this.user = state.user;
    });
  }
  onChangeMarked() {
    console.log('onChangeMarked');
    if (this.user) {
      const action = this.technique.marked
        ? TechniquesActions.unmarkTechnique
        : TechniquesActions.markTechnique;
      this.store.dispatch(action({ technique: this.technique }));
    }
  }
}

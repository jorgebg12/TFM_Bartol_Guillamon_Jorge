import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import * as AuthActions from '../../../Auth/actions';
import { UserDTO } from '../../../Models/user.dto';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  user: UserDTO | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('auth').subscribe((state) => {
      this.user = state.user;
    });
  }
  closeSession() {
    this.store.dispatch(AuthActions.closeSession());
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { UserDTO } from '../../../Models/user.dto';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private userLogged: UserDTO | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('auth').subscribe((state) => {
      this.userLogged = state.user;
    });
  }
}

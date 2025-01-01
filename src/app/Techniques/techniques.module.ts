import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TechniqueListComponent } from './components/technique-list/technique-list.component';
import { TechniquesRoutingModule } from './techniques-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    SearchComponent,
    SidenavComponent,
    TechniqueListComponent,
  ],
  imports: [
    CommonModule,
    TechniquesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class TechniquesModule {}

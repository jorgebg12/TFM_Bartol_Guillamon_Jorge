import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() changeTechniques = new EventEmitter<string>();
  constructor() {}

  OnClickAtack(): void {
    this.changeTechniques.emit('Atack');
  }
  OnClickDefense(): void {
    this.changeTechniques.emit('Defense');
  }
  OnClickPosition(): void {
    this.changeTechniques.emit('Position');
  }
  OnClickPum(): void {
    this.changeTechniques.emit('Pum');
  }
}

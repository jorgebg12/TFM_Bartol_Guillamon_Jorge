import { Component } from '@angular/core';
import { Belt, TechniqueDTO } from '../../../Models/technique.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  belts = Belt;
  technique: TechniqueDTO;

  constructor() {
    this.technique = new TechniqueDTO(
      1,
      'prueba',
      'prueba',
      'prueba',
      Belt.white
    );
  }
}

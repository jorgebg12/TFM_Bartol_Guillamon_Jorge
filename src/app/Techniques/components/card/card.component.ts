import { Component, OnInit } from '@angular/core';
import { Belt, TechniqueDTO } from '../../../Models/technique.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  belts = Belt;
  technique: TechniqueDTO;

  constructor() {
    this.technique = new TechniqueDTO(
      1,
      'prueba',
      '/image-placeholder.jpg',
      'prueba',
      Belt.white
    );
  }
  ngOnInit(): void {}
}

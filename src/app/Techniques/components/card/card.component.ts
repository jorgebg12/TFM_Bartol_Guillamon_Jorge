import { Component, Input, OnInit } from '@angular/core';
import { Belt, TechniqueDTO } from '../../../Models/technique.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  belts = Belt;
  @Input() technique!: TechniqueDTO;
  constructor() {}
  ngOnInit(): void {}
}

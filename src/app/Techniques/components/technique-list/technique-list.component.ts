import { Component, OnInit } from '@angular/core';
import { TechniqueDTO } from '../../../Models/technique.dto';
import { TechniquesService } from '../../Services/techniques.service';

@Component({
  selector: 'app-technique-list',
  templateUrl: './technique-list.component.html',
  styleUrl: './technique-list.component.scss',
})
export class TechniqueListComponent implements OnInit {
  techniqueList: TechniqueDTO[] = [];

  constructor(private techniqueService: TechniquesService) {}

  ngOnInit(): void {
    this.LoadAtacks();
  }

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
    this.techniqueService
      .getTechniquesAtack()
      .subscribe((items: TechniqueDTO[]) => (this.techniqueList = items));
  }

  LoadDefenses(): void {
    this.techniqueService
      .getTechniquesDefense()
      .subscribe((items: TechniqueDTO[]) => (this.techniqueList = items));
  }

  LoadPositions(): void {
    this.techniqueService
      .getTechniquesPosition()
      .subscribe((items: TechniqueDTO[]) => (this.techniqueList = items));
  }

  LoadPum(): void {
    this.techniqueService
      .getTechniquesPum()
      .subscribe((items: TechniqueDTO[]) => (this.techniqueList = items));
  }
}

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
    this.techniqueService
      .getTechniquesAtack()
      .subscribe((items: TechniqueDTO[]) => (this.techniqueList = items));
  }
}

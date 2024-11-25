import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniqueListComponent } from './technique-list.component';

describe('TechniqueListComponent', () => {
  let component: TechniqueListComponent;
  let fixture: ComponentFixture<TechniqueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechniqueListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechniqueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

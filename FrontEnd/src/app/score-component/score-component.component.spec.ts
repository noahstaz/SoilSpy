import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreComponentComponent } from './score-component.component';

describe('ScoreComponentComponent', () => {
  let component: ScoreComponentComponent;
  let fixture: ComponentFixture<ScoreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

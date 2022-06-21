import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBoxComponentComponent } from './info-box-component.component';

describe('InfoBoxComponentComponent', () => {
  let component: InfoBoxComponentComponent;
  let fixture: ComponentFixture<InfoBoxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBoxComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

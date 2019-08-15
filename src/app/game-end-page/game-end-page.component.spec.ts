import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEndPageComponent } from './game-end-page.component';

describe('GameEndPageComponent', () => {
  let component: GameEndPageComponent;
  let fixture: ComponentFixture<GameEndPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameEndPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameEndPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

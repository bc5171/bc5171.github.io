import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodeGameComponent } from './decode-game.component';

describe('DecodeGameComponent', () => {
  let component: DecodeGameComponent;
  let fixture: ComponentFixture<DecodeGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecodeGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecodeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

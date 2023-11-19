import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyTooltipComponent } from './enemy-tooltip.component';

describe('EnemyTooltipComponent', () => {
  let component: EnemyTooltipComponent;
  let fixture: ComponentFixture<EnemyTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemyTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnemyTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

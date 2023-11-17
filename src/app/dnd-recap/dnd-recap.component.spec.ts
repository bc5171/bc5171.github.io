import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndRecapComponent } from './dnd-recap.component';

describe('DndRecapComponent', () => {
  let component: DndRecapComponent;
  let fixture: ComponentFixture<DndRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndRecapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DndRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureCardComponent } from './venture-card.component';

describe('VentureCardComponent', () => {
  let component: VentureCardComponent;
  let fixture: ComponentFixture<VentureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentureCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarReunionesComponent } from './agregar-reuniones.component';

describe('AgregarReunionesComponent', () => {
  let component: AgregarReunionesComponent;
  let fixture: ComponentFixture<AgregarReunionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarReunionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarReunionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraccionesComponent } from './extracciones.component';

describe('ExtraccionesComponent', () => {
  let component: ExtraccionesComponent;
  let fixture: ComponentFixture<ExtraccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

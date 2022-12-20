import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaCuestrionarioComponent } from './respuesta-cuestrionario.component';

describe('RespuestaCuestrionarioComponent', () => {
  let component: RespuestaCuestrionarioComponent;
  let fixture: ComponentFixture<RespuestaCuestrionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestaCuestrionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestaCuestrionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

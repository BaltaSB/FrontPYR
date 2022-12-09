import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCuestionarios2Component } from './list-cuestionarios2.component';

describe('ListCuestionarios2Component', () => {
  let component: ListCuestionarios2Component;
  let fixture: ComponentFixture<ListCuestionarios2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCuestionarios2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCuestionarios2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

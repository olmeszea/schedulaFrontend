import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmpresasComponent } from './tabla-empresas.component';

describe('TablaEmpresasComponent', () => {
  let component: TablaEmpresasComponent;
  let fixture: ComponentFixture<TablaEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

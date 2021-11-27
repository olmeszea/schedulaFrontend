import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerConveniosComponent } from './ver-convenios.component';

describe('VerConveniosComponent', () => {
  let component: VerConveniosComponent;
  let fixture: ComponentFixture<VerConveniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerConveniosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMesasComponent } from './form-mesas.component';

describe('FormMesasComponent', () => {
  let component: FormMesasComponent;
  let fixture: ComponentFixture<FormMesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaMesasComponent } from './tabela-mesas.component';

describe('TabelaMesasComponent', () => {
  let component: TabelaMesasComponent;
  let fixture: ComponentFixture<TabelaMesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaMesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

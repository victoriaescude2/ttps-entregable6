import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMisServiciosComponent } from './list-mis-servicios.component';

describe('ListMisServiciosComponent', () => {
  let component: ListMisServiciosComponent;
  let fixture: ComponentFixture<ListMisServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMisServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMisServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitadorComponent } from './facilitador.component';

describe('FacilitadorComponent', () => {
  let component: FacilitadorComponent;
  let fixture: ComponentFixture<FacilitadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

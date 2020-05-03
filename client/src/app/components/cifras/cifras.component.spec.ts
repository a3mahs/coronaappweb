import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CifrasComponent } from './cifras.component';

describe('CifrasComponent', () => {
  let component: CifrasComponent;
  let fixture: ComponentFixture<CifrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

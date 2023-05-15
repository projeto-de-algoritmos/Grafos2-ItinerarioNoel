import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafoPrimComponent } from './grafo-prim.component';

describe('GrafoPrimComponent', () => {
  let component: GrafoPrimComponent;
  let fixture: ComponentFixture<GrafoPrimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafoPrimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafoPrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

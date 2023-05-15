import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafoHeaderComponent } from './grafo-header.component';

describe('GrafoHeaderComponent', () => {
  let component: GrafoHeaderComponent;
  let fixture: ComponentFixture<GrafoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

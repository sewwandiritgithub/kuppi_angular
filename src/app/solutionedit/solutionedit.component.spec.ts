import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutioneditComponent } from './solutionedit.component';

describe('SolutioneditComponent', () => {
  let component: SolutioneditComponent;
  let fixture: ComponentFixture<SolutioneditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutioneditComponent]
    });
    fixture = TestBed.createComponent(SolutioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

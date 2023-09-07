import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupComponent } from './sup.component';

describe('SupComponent', () => {
  let component: SupComponent;
  let fixture: ComponentFixture<SupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupComponent]
    });
    fixture = TestBed.createComponent(SupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

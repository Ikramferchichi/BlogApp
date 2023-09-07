import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSComponent } from './add-s.component';

describe('AddSComponent', () => {
  let component: AddSComponent;
  let fixture: ComponentFixture<AddSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSComponent]
    });
    fixture = TestBed.createComponent(AddSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

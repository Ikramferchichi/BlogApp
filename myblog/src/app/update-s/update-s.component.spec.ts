import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSComponent } from './update-s.component';

describe('UpdateSComponent', () => {
  let component: UpdateSComponent;
  let fixture: ComponentFixture<UpdateSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSComponent]
    });
    fixture = TestBed.createComponent(UpdateSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

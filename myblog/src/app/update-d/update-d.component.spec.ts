import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDComponent } from './update-d.component';

describe('UpdateDComponent', () => {
  let component: UpdateDComponent;
  let fixture: ComponentFixture<UpdateDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDComponent]
    });
    fixture = TestBed.createComponent(UpdateDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

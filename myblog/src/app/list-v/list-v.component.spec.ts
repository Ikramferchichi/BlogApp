import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVComponent } from './list-v.component';

describe('ListVComponent', () => {
  let component: ListVComponent;
  let fixture: ComponentFixture<ListVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListVComponent]
    });
    fixture = TestBed.createComponent(ListVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

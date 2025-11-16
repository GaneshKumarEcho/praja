import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMandalComponent } from './add-edit-mandal.component';

describe('AddEditMandalComponent', () => {
  let component: AddEditMandalComponent;
  let fixture: ComponentFixture<AddEditMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditMandalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

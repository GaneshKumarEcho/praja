import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVillageComponent } from './add-edit-village.component';

describe('AddEditVillageComponent', () => {
  let component: AddEditVillageComponent;
  let fixture: ComponentFixture<AddEditVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditVillageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

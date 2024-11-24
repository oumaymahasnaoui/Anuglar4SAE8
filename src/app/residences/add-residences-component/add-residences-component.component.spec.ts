import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResidencesComponentComponent } from './add-residences-component.component';

describe('AddResidencesComponentComponent', () => {
  let component: AddResidencesComponentComponent;
  let fixture: ComponentFixture<AddResidencesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddResidencesComponentComponent]
    });
    fixture = TestBed.createComponent(AddResidencesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

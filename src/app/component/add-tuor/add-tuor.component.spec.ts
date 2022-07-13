import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTuorComponent } from './add-tuor.component';

describe('AddTuorComponent', () => {
  let component: AddTuorComponent;
  let fixture: ComponentFixture<AddTuorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTuorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTuorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

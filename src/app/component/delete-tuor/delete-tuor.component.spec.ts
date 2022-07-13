import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTuorComponent } from './delete-tuor.component';

describe('DeleteTuorComponent', () => {
  let component: DeleteTuorComponent;
  let fixture: ComponentFixture<DeleteTuorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTuorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTuorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTuorComponent } from './detail-tuor.component';

describe('DetailTuorComponent', () => {
  let component: DetailTuorComponent;
  let fixture: ComponentFixture<DetailTuorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTuorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTuorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

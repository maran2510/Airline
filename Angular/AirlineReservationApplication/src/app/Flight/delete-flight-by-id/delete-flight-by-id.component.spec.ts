import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFlightByIdComponent } from './delete-flight-by-id.component';

describe('DeleteFlightByIdComponent', () => {
  let component: DeleteFlightByIdComponent;
  let fixture: ComponentFixture<DeleteFlightByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFlightByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFlightByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

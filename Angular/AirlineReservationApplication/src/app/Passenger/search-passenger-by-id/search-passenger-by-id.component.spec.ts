import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPassengerByIdComponent } from './search-passenger-by-id.component';

describe('SearchPassengerByIdComponent', () => {
  let component: SearchPassengerByIdComponent;
  let fixture: ComponentFixture<SearchPassengerByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPassengerByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPassengerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

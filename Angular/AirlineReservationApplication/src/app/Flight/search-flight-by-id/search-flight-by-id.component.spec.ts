import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightByIdComponent } from './search-flight-by-id.component';

describe('SearchFlightByIdComponent', () => {
  let component: SearchFlightByIdComponent;
  let fixture: ComponentFixture<SearchFlightByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFlightByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

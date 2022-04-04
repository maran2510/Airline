import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSeatByIdComponent } from './search-seat-by-id.component';

describe('SearchSeatByIdComponent', () => {
  let component: SearchSeatByIdComponent;
  let fixture: ComponentFixture<SearchSeatByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSeatByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSeatByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

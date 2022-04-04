import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCityByIdComponent } from './search-city-by-id.component';

describe('SearchCityByIdComponent', () => {
  let component: SearchCityByIdComponent;
  let fixture: ComponentFixture<SearchCityByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCityByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCityByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

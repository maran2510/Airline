import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdminByIdComponent } from './search-admin-by-id.component';

describe('SearchAdminByIdComponent', () => {
  let component: SearchAdminByIdComponent;
  let fixture: ComponentFixture<SearchAdminByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAdminByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdminByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

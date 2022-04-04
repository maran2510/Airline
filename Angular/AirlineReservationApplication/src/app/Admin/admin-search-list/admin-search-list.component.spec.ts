import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchListComponent } from './admin-search-list.component';

describe('AdminSearchListComponent', () => {
  let component: AdminSearchListComponent;
  let fixture: ComponentFixture<AdminSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSearchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

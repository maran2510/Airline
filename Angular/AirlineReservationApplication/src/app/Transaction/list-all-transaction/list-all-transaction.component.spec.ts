import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllTransactionComponent } from './list-all-transaction.component';

describe('ListAllTransactionComponent', () => {
  let component: ListAllTransactionComponent;
  let fixture: ComponentFixture<ListAllTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

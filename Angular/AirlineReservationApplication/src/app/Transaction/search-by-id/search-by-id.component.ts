import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/Flight/transaction.service';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.css']
})
export class SearchByIdComponent implements OnInit {

  traObj: Transaction = new Transaction();
  TrId : number = 0;
  notFound: boolean = false;
  no: number=0;
  constructor(private traService:TransactionService, private router:Router) { }

  ngOnInit(): void {
  }
  onSearch() {
    console.log("inside search" + this.TrId);
    this.traService.getTransactionById(this.TrId).
      subscribe((data: any) => {
        this.traObj = data;
        
        if (this.traObj) {
          this.notFound = true;
        }
        {
          this.notFound = false;
        }

      },
        (error) => {
          console.log('Transaction not found');
          this.notFound = true;
        })

  }

}

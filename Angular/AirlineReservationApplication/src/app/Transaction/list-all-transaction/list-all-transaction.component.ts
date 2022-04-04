import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/Flight/transaction.service';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-list-all-transaction',
  templateUrl: './list-all-transaction.component.html',
  styleUrls: ['./list-all-transaction.component.css']
})
export class ListAllTransactionComponent implements OnInit {
  constructor(private traSer:TransactionService) { }
  
  traList : Transaction[] = [];
 
 ngOnInit(): void {
   this.loadData();
 }
 public loadData()
 {
   console.log("calling service");
   this.traSer.listAllTransaction().subscribe(
     data=>
     {
       this.traList=data;
       console.log("in tra-list" +this.traList);

       
     }    
   )
 }

}

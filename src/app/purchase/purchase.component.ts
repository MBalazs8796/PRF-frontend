import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemManagerService } from '../utils/item-manager.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  name: string;
  errorMsg: string;
  cost: number;
  amount: number;
  wantedAmount: number;

  constructor(private route: ActivatedRoute, private itemManager: ItemManagerService, private router: Router) {
    this.name = '';
    this.errorMsg = '';
    this.cost = 0;
    this.amount = 0;
    this.wantedAmount = 0;
  }

  buy(){
    if(this.amount>=this.wantedAmount){
      this.itemManager.purchaseItem(this.name, this.wantedAmount).subscribe(
        (msg) => this.router.navigate(['/mainPage', {msg: "Purchase succesful!"}]),
        (err) => {
          console.log(err);
          this.errorMsg = err['error'];
        }
      );
    } else{
      this.errorMsg = "There isn't enough " + this.name + " in stock!";
    }
  }

  ngOnInit(): void {
    console.log(this.route.paramMap.subscribe(
      items => {
        this.name = items.get("name") || '';
        this.cost = parseInt(items.get("cost") || '-1');
        this.amount = parseInt(items.get("amount") || '-1') ;
      }
    ))
  }

}

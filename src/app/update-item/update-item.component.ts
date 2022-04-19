import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemManagerService } from '../utils/item-manager.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {



  name: string;
  cost: number;
  amount: number;
  errorMsg: string;

  constructor(private itemService: ItemManagerService, private router: Router, private route: ActivatedRoute) {
      this.name = '';
      this.cost = 0;
      this.amount = 0;
      this.errorMsg = '';
   }

   update(){
    if(this.name!==''&& this.cost > 0 && this.amount >= 0){
      this.itemService.updateItem(this.name, this.amount, this.cost).subscribe(
        (msg) =>{
          console.log(msg);
          this.errorMsg = '';
          this.router.navigate(['/stockUpdater']);
        },
        error => {
          this.errorMsg = error['error'];
          console.log(error);
        }
      )
    }else if(this.name === ''){
      this.errorMsg = 'Name must be specified'
    } else if(this.cost <= 0){
      this.errorMsg = 'Cost has to be greater than 0'
    } else if(this.amount < 0){
      this.errorMsg = "Amount can't be a negative number"
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      items => {
        this.name = items.get("name") || '';
        this.cost = parseInt(items.get("cost") || '-1');
        this.amount = parseInt(items.get("amount") || '-1') ;
      }
    )

  }


}

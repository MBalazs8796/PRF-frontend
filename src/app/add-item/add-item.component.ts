import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemManagerService } from '../utils/item-manager.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {



  name: string;
  cost: number;
  amount: number;
  errorMsg: string;

  constructor(private itemService: ItemManagerService, private router: Router) {
      this.name = '';
      this.cost = 0;
      this.amount = 0;
      this.errorMsg = '';
   }

   add(){
    if(this.name!=='' && this.cost > 0 && this.amount >= 0){
      this.itemService.addItem(this.name, this.amount, this.cost).subscribe(
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
    } else if(this.name === ''){
      this.errorMsg = 'Name must be specified'
    } else if(this.cost <= 0){
      this.errorMsg = 'Cost has to be greater than 0'
    } else if(this.amount < 0){
      this.errorMsg = "Amount can't be a negative number"
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemManagerService } from '../utils/item-manager.service';

@Component({
  selector: 'app-stock-update-page',
  templateUrl: './stock-update-page.component.html',
  styleUrls: ['./stock-update-page.component.css']
})
export class StockUpdatePageComponent implements OnInit {

  stock: any;

  constructor(private itemManager: ItemManagerService, private router: Router) {
    this.stock = [];
  }

  delete(name: string){
    this.itemManager.deleteItem(name).subscribe(
      msg => {
        console.log(msg),
        this.router.navigate(['/mainPage'])
      },
      err => console.log(err)
    );
  }

  ngOnInit(): void {
    this.itemManager.getAllItems().subscribe(
      msg => {
        this.stock = msg;
        console.log(msg)
      },
      error =>{
        console.log(error)
      }
    )
  }

}

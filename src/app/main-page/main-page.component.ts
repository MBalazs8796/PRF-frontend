import { Component, OnInit } from '@angular/core';
import { ItemManagerService } from '../utils/item-manager.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  stock: any;

  constructor(private itemManager: ItemManagerService) {
    this.stock = [];
  }

  ngOnInit(): void {
      this.itemManager.getAllItems().subscribe(
        msg => {
          this.stock = msg;
        },
        error =>{
          console.log(error)
        }
      )
  }

}

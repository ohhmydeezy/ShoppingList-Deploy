import { Component } from '@angular/core';
import { AddShoppingList, Shoppinglist } from '../../models/shoppinglist.model';
import { OnInit } from '@angular/core';
import { ShoppinglistService } from '../../services/shoppinglist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent implements OnInit{

  addItemRequest: AddShoppingList = { 
    item: '',
    quantity: 0,
    isImportant: false,
  };
  constructor(private shoppinglistService: ShoppinglistService, private router: Router) { }

  ngOnInit(): void {
  }
  addItem() {
    this.shoppinglistService.addItem(this.addItemRequest).subscribe({
      next: (data) => {
        this.router.navigate(['shoppinglist']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}

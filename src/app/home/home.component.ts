import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private inventoryserv : InventoryService){

  }

  ngOnInit(){
    this.inventory = this.inventoryserv.getInventory();
  }
  inventory = [];
  cart = [];
  totalPrize = 0;

  addToCart(index) {
    this.cart.push(this.inventory[index]);
    this.inventory[index].selected = true;
    this.updateTotalPrize();
  }
  removeFromCart(index) {
    this.inventory[index].quantity = 0;
    let i = this.cart.indexOf(this.inventory[index]);
    this.cart.splice(i, 1);
    this.inventory[index].selected = false;
    this.updateTotalPrize();
  }
  updateTotalPrize() {
    this.totalPrize = 0;
    this.inventory.forEach(item => {
      this.totalPrize = this.totalPrize + item.price * item.quantity;
    });
  }

}

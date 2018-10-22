import { Injectable } from '@angular/core';
import { INVENTORY } from './inventory'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  inventory = INVENTORY;


  constructor() { }

  getInventory(){
    return this.inventory;
  }

}

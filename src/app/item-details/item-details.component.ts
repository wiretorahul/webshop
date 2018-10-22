import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  inventory =[];
  routeParams = {};
  constructor(private inventoryserv : InventoryService ,private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.routeParams = params );
  }

  ngOnInit() {
    this.inventory = this.inventoryserv.getInventory();
  }

}

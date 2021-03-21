import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ObservService } from 'src/app/sevice/observ.service';

import * as allPizza from '../../sevice/pizaa';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  allPizaas:any []
  number :any = 1
  cartOrder:any =[]
  dis: boolean = true
  constructor(private observ : ObservService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
   this.observ.pizzaAsObs.subscribe(res=>{
    this.allPizaas =res
   })
  }


add(pizza){
  this.cartOrder.push(pizza)
  this.observ.setCart(this.cartOrder)
  let allert = "Added succesfully to cart"
  this._snackBar.open(allert, "", {
    panelClass: "alert-success",
    duration: 2000
  });
}
}

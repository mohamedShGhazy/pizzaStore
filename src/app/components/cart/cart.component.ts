import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { ObservService } from "src/app/sevice/observ.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cartContent: any = [];
  registerForm: any;
  constructor(private observ: ObservService,private _snackBar: MatSnackBar,
    private rout: Router ) {}

  ngOnInit() {

    this.observ.getCart.subscribe((res) => {
      console.log(res);
      this.cartContent = res
    });

  }

  remove(i){
    this.cartContent.splice(i, 1);
    this.observ.setCart(this.cartContent)
    let allert = "Removed succesfully from cart"
    this._snackBar.open(allert, "", {
      panelClass: "alert-danger",
      duration: 2000
    });
    if(this.cartContent.length == 0 ){
      this.rout.navigate(['/store'])
    }
  }
  back(){
    this.observ.setCart([])
    this.rout.navigate(['/store'])
  }
}

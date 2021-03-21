import { Component } from "@angular/core";
import { ObservService } from "./sevice/observ.service";
import { MatDialog, MatDialogRef } from "@angular/material";
import { LoginComponent } from "./components/login/login.component";
import { Router } from "@angular/router";
import * as allPizza from './sevice/pizaa';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  allPIzzaaa = allPizza.Pizzas()
  title = "pizzaStore";
  hide = true;
  cartArr: any = [];
  numOrder: any;
  constructor(
    private observ: ObservService,
    public dialog: MatDialog,
    private router:Router
  ) {
    this.observ.pizzaUpdate(this.allPIzzaaa)
    this.observ.getCart.subscribe((res) => {
      console.log(res);
      this.cartArr = res;
      this.numOrder = this.cartArr ? this.cartArr.length : "0";
    });
  }
  open() {
    if(localStorage.getItem("login") == "true"){
      this.router.navigate(['/admin'])
    }else{
      this.openDialog()
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: "600px",
    });

  }
}

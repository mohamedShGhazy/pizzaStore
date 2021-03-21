import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { ObservService } from "src/app/sevice/observ.service";
import * as allPizza from "../../sevice/pizaa";

declare const $: any;

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  img: any;
  arr: any = [];
  addPizza: any;
  component: any = [];
  allPizaas = allPizza.Pizzas();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private observ: ObservService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.formValidator();
  }
  formValidator() {
    this.addPizza = this.formBuilder.group({
      img: ["", Validators.required],
      name: ["", Validators.required],
      price: ["", Validators.required],
      component: ["", Validators.required],
    });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/store"]);
  }

  readURL(input) {
    // console.log(input)
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        // console.log(e);
        this.img = e.target.result;
        $("#imagePreview").css(
          "background-image",
          "url(" + e.target.result + ")"
        );
        $("#imagePreview").hide();
        $("#imagePreview").fadeIn(650);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  change(e) {
    this.arr = [];
    this.img = null;
    let file = e.target.files[0];
    if (file) {
      this.arr.push(file);
      this.img = file;
      // console.log(this.files)
      var reader = new FileReader();
      reader.onload = (e: any) => {
        // console.log(e);
        this.img = e.target.result;
      };
      reader.readAsDataURL(this.img);
    }
  }
  addCom() {
    if (this.addPizza.value.component) {
      this.component.push(this.addPizza.value.component);
    }
  }
  onSubmit() {
    let pizza = {
      name: this.addPizza.value.name,
      img: "../../../assets/addPizza.jpg",
      comp: this.component.toString(),
      price: this.addPizza.value.name,
    };
    this.allPizaas.push(pizza);
    console.log(" this.allPizaas", this.allPizaas);
    this.observ.pizzaUpdate(this.allPizaas);
    let allert = "Pizza Added succesfully ";
    this._snackBar.open(allert, "", {
      panelClass: "alert-success",
      duration: 2000,
    });
    this.addPizza.reset()
    this.component=[]
  }
  remove(i){
    this.allPizaas.splice(i, 1);
    this.observ.pizzaUpdate( this.allPizaas)
    let allert = "Removed succesfully from cart"
    this._snackBar.open(allert, "", {
      panelClass: "alert-danger",
      duration: 2000
    });
  }
}

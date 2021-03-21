import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  login: any = true;
  form:any
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formValidator()
  }
  onSubmit() {
    localStorage.setItem("login", this.login);
    this.router.navigate(["/admin"]);
    this.dialogRef.close()
  }
  formValidator() {
    this.form = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  close(){
    this.dialogRef.close()
  }
}

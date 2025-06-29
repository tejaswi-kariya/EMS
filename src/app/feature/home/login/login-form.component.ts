import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../../data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log("Login Data:", this.loginForm.value);
      const { email, password } = this.loginForm.value;
      this.dataService.onLogin(email, password).subscribe((users) => {
        if (users.length > 0) {
          alert("Login successful!");
          this.dataService.isUserLogin = true;
          this.dataService.setLoginSuccess();
          this.router.navigate(['./dashboard/event-list']);
        } else {
          alert("Invalid email or password");
        }
      });
    }
  }
}

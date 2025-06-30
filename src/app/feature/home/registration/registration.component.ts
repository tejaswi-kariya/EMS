import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { DataService } from "../../data.service";
import { Users } from "../model/user.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  passwordMismatch = false;
  private newUser: Users = new Users();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private http: HttpClient
  ) {
    this.registrationForm = this.fb.group(
      {
        name: ["", Validators.required],
        lname: [],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
      },
      {validator: this.checkConfirmPassword(),}
    );
  }

  ngOnInit() {}

  checkConfirmPassword() {
    return (formGroup: FormGroup) => {
      const password = formGroup.controls['password'];
      const cpassword = formGroup.controls['confirmPassword'];
      if (cpassword.errors &&
        !cpassword.errors.passwordMismatch
      ) {
        return;
      }
      if (password.value === cpassword.value) {
        cpassword.setErrors(null);
      } else {
        cpassword.setErrors({ passwordMismatch: true });
      }
    };
  }

  register() {
    this.newUser.firstName = this.registrationForm.value.name;
    this.newUser.lastName = this.registrationForm.value.lastName;
    (this.newUser.email = this.registrationForm.value.email),
      (this.newUser.password = this.registrationForm.value.password);

    // is user already exists
    this.http
      .get<any[]>(`http://localhost:3000/users?email=${this.newUser.email}`)
      .subscribe((users) => {
        if (users.length > 0) {
          alert("Email already exists");
        } else {
          this.dataService.createNewUser(this.newUser).subscribe(() => {
            alert("Registration successful");
            this.router.navigate(["home"]);
          });
        }
      });
  }
}

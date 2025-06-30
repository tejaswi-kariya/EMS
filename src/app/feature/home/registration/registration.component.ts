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
  private newUSer: Users = new Users();

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
      {}
    );
  }

  ngOnInit() {}

  register() {
    this.newUSer.firstName = this.registrationForm.value.name;
    this.newUSer.lastName = this.registrationForm.value.lastName;
    (this.newUSer.email = this.registrationForm.value.email),
      (this.newUSer.password = this.registrationForm.value.password);

    // is user already exists
    this.http
      .get<any[]>(`http://localhost:3000/users?email=${this.newUSer.email}`)
      .subscribe((users) => {
        if (users.length > 0) {
          alert("Email already exists");
        } else {
          this.dataService.createNewUser(this.newUSer).subscribe(() => {
            alert("Registration successful");
            this.router.navigate(["home"]);
          });
        }
      });
  }
}

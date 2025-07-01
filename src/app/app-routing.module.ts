import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginFormComponent } from "./feature/home/login/login-form.component";
import { RegistrationComponent } from "./feature/home/registration/registration.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    component: LoginFormComponent,
  },
  {
    path: "dashboard",
    loadChildren:
      "src/app/feature/home/dashboard/dashboard.module#DashboardModule",
  },
  {
    path: "register",
    component: RegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

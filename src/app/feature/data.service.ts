import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { Events } from "./home/dashboard/event-list/model/event.model";

@Injectable({
  providedIn: "root",
})
export class DataService {
  isUserLogin = false;
  private apiUrl = "http://localhost:3000"; // JSON Server URL

  constructor(private http: HttpClient, private router: Router) {}

  onLogin(email: string, password: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/users?email=${email}&password=${password}`
    );
  }

  isUserLoggedIn(): boolean {
    const expiry = localStorage.getItem("sessionExpiry");
    const loggedIn = localStorage.getItem("userLoggedIn") === "true";

    if (expiry) {
      const expiryTime = parseInt(expiry, 10);
      const now = Date.now();

      if (now > expiryTime) {
        this.logoutUser();
        return false;
      }
    }

    return loggedIn;
  }

  logoutUser(): void {
    localStorage.removeItem("sessionExpiry");
    localStorage.removeItem("userLoggedIn");
    this.router.navigate(["/home"]);
  }

  setLoginSuccess() {
    const expiryDuration = Date.now() + 220000; // It is 3 mins == 220000 miliseconds
    localStorage.setItem("sessionExpiry", expiryDuration.toString());
    localStorage.setItem("userLoggedIn", "true");
  }

  getEvent(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/events`);
  }

  addEvent(event: Events): Observable<Events> {
    return this.http.post<Events>(`${this.apiUrl}/events`, event);
  }
}

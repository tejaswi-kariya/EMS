import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { Events } from "./home/model/event.model";
import { eventNames } from "process";
import { Users } from "./home/model/user.model";

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

  // Create New user
  createNewUser(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.apiUrl}/users`, user);
  }

  // Get user
  getUser(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users?email=${email}`);
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

  //get list of events
  getEvent(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/events`);
  }

  //Create New event
  addEvent(event: Events): Observable<Events> {
    return this.http.post<Events>(`${this.apiUrl}/events`, event);
  }

  //update exixting event
  updateEvent(event: Events): Observable<Events> {
    return this.http.patch<Events>(`${this.apiUrl}/events/${event.id}`, event);
  }

  // Delete event
  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/events/${id}`);
  }
}

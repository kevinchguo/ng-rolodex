import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  constructor(private http: HttpClient) {}
  // Mock backend
  contact(data) {
    return this.http.post("/api/contact", data).toPromise(); // use toPromise because observables
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  private isLoggedIn = false;
  employeeURL = 'http://localhost:3000/Employees';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): boolean {

    if (username === 'a' && password === 'a') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  register(username: string, password: string): Observable<any> {
    const payload = { username, password };
    return this.http.post<any>(this.employeeURL, payload);
  }

  getProfileData(): Observable<any> {
    return this.http.get<any>(this.employeeURL);
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post<any>(this.employeeURL, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    const url = `${this.employeeURL}/${id}`;
    return this.http.delete<any>(url);
  }


  editEmployee(id: string, updatedData: any): Observable<any> {
    const url = `${this.employeeURL}/${id}`;
    return this.http.put<any>(url, updatedData);
  }
}

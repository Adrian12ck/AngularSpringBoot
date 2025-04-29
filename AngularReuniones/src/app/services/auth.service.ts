import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `http://localhost:8080/auth/login`; // URL de tu API de login
  private token = 'authToken'

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {

    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      tap(response => {
        if(response.token){

          this.setToken(response.token);

        }
  }));
  }


  private setToken(token: string): void {
    localStorage.setItem(this.token, token);
  }


  private getToken(): string | null {
      if(typeof window !== 'undefined'){
        return localStorage.getItem(this.token);
      }else {
        return null;
      }
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    } 

    // Se asume que el token es un JWT (tiene 3 partes separadas por '.')
    const parts = token.split('.');

    const payload = JSON.parse(atob(parts[1]));

    const exp = payload.exp * 1000;

    return Date.now() < exp;
  }

  logout(): void {
    localStorage.removeItem(this.token);
    this.router.navigate(["/"])
  }

}

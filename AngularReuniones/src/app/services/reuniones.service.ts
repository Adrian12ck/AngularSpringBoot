import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReunionesService {
  private apiUrl = 'http://localhost:8080/api/reuniones'; // Tu URL de la API


  constructor(private http: HttpClient) {}

  getReuniones(): Observable<any> {
    const token = localStorage.getItem('authToken'); // Obtener el token de localStorage
    
    if (token) {
      // Agregar el token a los encabezados
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      
      // Hacer la solicitud GET con el encabezado de autorización
      return this.http.get(this.apiUrl, { headers });
    } else {
      console.error('No hay token disponible');
      return new Observable(); // O cualquier otro manejo adecuado de errores
    }
  }


  addReunion(reunion: any): Observable<any> {
    const token = localStorage.getItem('authToken'); // Obtener el token de localStorage
    
    if (token) {
      // Agregar el token a los encabezados
   
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });

      // Hacer la solicitud POST con el encabezado de autorización y el cuerpo con la data de la reunión
      return this.http.post(this.apiUrl, reunion, { headers } );
    } else {
      console.error('No hay token disponible');
      return new Observable(); // O cualquier otro manejo adecuado de errores
    }
  }

}

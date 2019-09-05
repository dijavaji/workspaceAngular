import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUsuario(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  crearUsuario(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, employee);
  }

  actualizarUsuario(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsuarioLista(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

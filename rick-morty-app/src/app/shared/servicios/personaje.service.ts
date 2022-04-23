import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';

import { Personaje } from '@shared/modelo/personaje';
import { environment } from '@environment/environment';
import { TrackHttpError } from '@shared/modelo/trackHttpError';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  readonly URL_SRV_RICKMORTY = environment.urlApiRickMorty;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  buscarPersonajes(query = '', page = 200):Observable<Personaje[] | TrackHttpError> {
    const filter = `${environment.urlApiRickMorty}/?name=${query}&page=${page}`;
    return this.http.get<Personaje[]>(filter).pipe(catchError((err) => this.handleHttpError(err)));
  }

  getDetalle(id: number) {
    return this.http.get<Personaje>(`${environment.urlApiRickMorty}/${id}`)
    .pipe(catchError((err) => this.handleHttpError(err)));
  }

  //getPersonajes(): Promise<Personaje[]> {
    //return this.http.get(`${environment.urlApiRickMorty}`).toPromise()
        //.then(response => response.json().data as Personaje[]).catch(this.handleError);
  //}

  getPersonajes(): Observable<any> {
    return this.http.get(`${environment.urlApiRickMorty}`);
  }

  private handleHttpError(error:HttpErrorResponse):Observable<TrackHttpError>{

    let dataError = new TrackHttpError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'Se produjo un error al recuperar datos';
    return throwError(dataError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Un error a ocurrido', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

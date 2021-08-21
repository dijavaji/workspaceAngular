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

  constructor(private http: HttpClient) {}

  buscarPersonajes(query = '', page = 200):Observable<Personaje[] | TrackHttpError> {
    const filter = `${environment.urlApiRickMorty}/?name=${query}&page=${page}`;
    return this.http.get<Personaje[]>(filter).pipe(catchError((err) => this.handleHttpError(err)));
  }

  getDetalle(id: number) {
    return this.http.get<Personaje>(`${environment.urlApiRickMorty}/${id}`)
    .pipe(catchError((err) => this.handleHttpError(err)));
  }


  private handleHttpError(error:HttpErrorResponse):Observable<TrackHttpError>{

    let dataError = new TrackHttpError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'Se produjo un error al recuperar datos';
    return throwError(dataError);
  }

}

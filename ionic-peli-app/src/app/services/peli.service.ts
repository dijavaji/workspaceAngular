import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {IPelicula} from '../model/IPelicula.interface' 

@Injectable({
  providedIn: 'root'
})
export class PeliService {

	private url: string ='';
	private apiKey: string ='413d8e9d';

  constructor(private http: HttpClient) { }

  buscarPeliculas(titulo: string, tipo: string){
  	this.url = `http://www.omdbapi.com/?s=${encodeURI(titulo)}&type=${tipo}&apikey=${this.apiKey}`;
  	console.log (this.url);
  	return this.http.get<IPelicula>(this.url).pipe(map(results => results['Search'] ));  
  }

  getDetalle(id: string){
  	return this.http.get<IPelicula>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map ,catchError} from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	//baseUrl: string;
	readonly URL_SRV_BASE = environment.baseUrl;
    auth_token: string;

	constructor(private http: HttpClient) { 

	}


	authenticate(user: string, pass: string): Observable<boolean> {
		
		return this.http.post<any>("/auth/login", {username: user, password: pass}).pipe(map(response => {
            this.auth_token = response.token != null? response.token : null;
            console.log("token--- "+this.auth_token);
            return response.token != null ;
        }), catchError(this.handleError<any>('updateHero')));
	}

	get authenticated(): boolean {
        return this.auth_token != null;
    }

    clear() {
        this.auth_token = null;
    }


   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}

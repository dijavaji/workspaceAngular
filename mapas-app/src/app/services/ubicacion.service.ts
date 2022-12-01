import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

	constructor(private http: HttpClient) { }

	
	getPosition(): Promise<any> {
    	return new Promise((resolve, reject) => {
      		navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
	      },
	        err => {
	          reject(err);
	        });
	    });
  	}


  	getProduct(id: number): Observable<any> {
        console.log("busca producto "+id);
        return null;
        //return this.http.get<any>(`/products/${id}`);
    }


    calculateAndDisplayRoute(directionsService: google.maps.DirectionsService, 
    	directionsRenderer: google.maps.DirectionsRenderer) {
  		const start = "san bernardino, ca";
  		const end = "los angeles, ca";

  		/*directionsService.route({ origin: start, destination: end, travelMode: google.maps.TravelMode.DRIVING},null).then((response) => {
      directionsRenderer.setDirections(response);
    	}).catch((e) => window.alert("Directions request failed due to " + status));*/
	}


	getDirectionRoute(from:string,to:string): Observable<any> {
		//http://www.mapquestapi.com/directions/v2/route?key=pkm0vZuklO7ILdlA8h35lBlb1SrTZfgC&from=-0.264862,-78.5290489&to=-0.2557694,-78.5260341&doReverseGeocode=false
		//https://api.mapbox.com/directions/v5/mapbox/driving/-78.524413%2C-0.263542%3B-78.51897461659613%2C-0.244404856123002?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1IjoidGVjaG5vbG9xaWUiLCJhIjoiY2wyYXFqaXh2MDdhNjNkbGFqc3AwcDk5YSJ9.oZoaG9-b3ja4Vm7VM9uwHw

		//return this.http.get<any>(`http://www.mapquestapi.com/directions/v2/route?key=pkm0vZuklO7ILdlA8h35lBlb1SrTZfgC&from=${from}&to=${to}&doReverseGeocode=false`);
		return this.http.get<any>(`https://api.mapbox.com/directions/v5/mapbox/driving/${from}%3B${to}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1IjoidGVjaG5vbG9xaWUiLCJhIjoiY2wyYXFqaXh2MDdhNjNkbGFqc3AwcDk5YSJ9.oZoaG9-b3ja4Vm7VM9uwHw`);
	}

	getAddressesPlaces(dir:string): Observable<any> {
        console.log("busca dir "+dir);
        return this.http.get<any>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dir}.json?proximity=ip&types=address%2Cplace&language=es&access_token=pk.eyJ1IjoidGVjaG5vbG9xaWUiLCJhIjoiY2wyYXFqaXh2MDdhNjNkbGFqc3AwcDk5YSJ9.oZoaG9-b3ja4Vm7VM9uwHw&autocomplete=true`);
    }


    getPeliculas(valor:string): Observable<any>{
    	//http://www.omdbapi.com/?apikey=e8067b53&s=spider

    	return this.http.get<any>(`http://www.omdbapi.com/?apikey=e8067b53&s=${valor}`);
    }

}


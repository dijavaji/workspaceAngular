import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
//import 'rxjs/add/observable/interval';
//import 'rxjs/add/operator/takeWhile';
import {UbicacionService} from '../../services/ubicacion.service';
import { Marcador } from '../../model/marcador.class';

@Component({
  selector: 'app-rastreo',
  templateUrl: './rastreo.component.html',
  styleUrls: ['./rastreo.component.css']
})
export class RastreoComponent implements OnInit {

	// google maps zoom level
  zoom: number = 16;

  // initial center position for the map
  currentPos: point = {
    lat: -0.2558039,
    lng: -78.5225297
  };
  points: Marcador[] = [];
  tmpPoints: point[] = [
    this.currentPos,
    {
      lat: 50.082911,
      lng: 14.431411
    },
    {
      lat: 50.083202,
      lng: 14.430994
    },
    {
      lat: 50.083352,
      lng: 14.430780
    },
    {
      lat: 50.083491,
      lng: 14.430569
    },
    {
      lat: 50.083644,
      lng: 14.430367
    }
  ]

  public maneuvers: any []=[];

	constructor(private servicio:UbicacionService) { }

	ngOnInit() {
    this.trackingPoints();
  }

  trackingPoints(){
  	/*let i = 0;
    const obs = Observable.interval(2000)
      .takeWhile((v) =>  i < this.tmpPoints.length)
      .subscribe(() => {
        const pos = this.tmpPoints[i];
        this.points.push(pos);
        this.currentPos = pos;
        i++;
      })*/
      
      //this.servicio.getDirectionRoute("-0.263542, -78.524413","-0.244404856123002,-78.51897461659613").subscribe(res => { console.log(res); const rutas = JSON.parse(JSON.stringify(res)); this.maneuvers = rutas.route.legs[0].maneuvers; console.log(this.maneuvers);}, err => {console.error(err);})
      this.servicio.getDirectionRoute("-78.524413%2C-0.263542","-78.51897461659613%2C-0.244404856123002").subscribe(res => { console.log(res); 
      		const rutas = JSON.parse(JSON.stringify(res)); 
      		this.maneuvers = rutas.routes[0].geometry.coordinates; 
      		console.log(this.maneuvers);
      		this.maneuvers.forEach(element => {console.log(element); const nuevoMarcador = new Marcador(element[1],element[0]); this.points.push(nuevoMarcador);});
      	}, err => {console.error(err);});
		
		/*[["a",1],[ "b", 2],[ "c", 3]].reduce(function(result, item) {
  			var key = Object.keys(item)[0]; //first property: a, b, c
  			result[key] = item[key];
  			return result;		//{a: 1, b: 2, c: 3}
		}, {});*/	

		//this.maneuvers.forEach(element => {console.log(element); const nuevoMarcador = new Marcador(element[1],element[0]); this.points.push(nuevoMarcador);});	
		//const coords : {lat:number,lng : number} = this.maneuvers;
		//const nuevoMarcador = new Marcador(coords.lat,coords.lng);
		//this.marcadores.push(nuevoMarcador);		  	
  }

  mapClicked(event){

  }

  

}

// just an interface for type safety.
interface point {
  lat: number;
  lng: number;
}

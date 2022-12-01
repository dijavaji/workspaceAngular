import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { debounceTime, tap, switchMap, finalize, distinctUntilChanged, filter } from 'rxjs/operators';

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
  currentPos: Point = {
    lat: -0.2558039,
    lng: -78.5225297
  };
  points: Marcador[] = [];
  tmpPoints: Point[] = [
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

	// propiedades busqueda autocomplete
	myControl: FormControl = new FormControl();
	options = [{name:'Angular'}, {name:'React'}, {name:'Vue'}];
	filteredOptions: any;
	isLoading = false;
	errorMsg!: string;
	minLengthTerm = 3;
	selectedMovie: any = "";

	//propiedades de la ruta origen destino
	modeInput = "start";
	wayPoints: WayPoints = new WayPoints();
	inicio:string ="";
	fin:string="";

	constructor(private servicio:UbicacionService) { }

	ngOnInit() {
		//this.trackingPoints();
   		this.loadOption();
   		this.getPoints();
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

  private getPoints():void{
  	console.log('***** get points '+ this.selectedMovie);
  	this.maneuvers.splice(0,this.maneuvers.length);
  	this.trackingPoints();
  }

  mapClicked(event){

  }


  drawRoute():void{
  	console.log('punto origen y destino '+JSON.stringify(this.wayPoints));

  	this.servicio.getDirectionRoute(this.wayPoints.start.lng+","+this.wayPoints.start.lat,this.wayPoints.end.lng+","+this.wayPoints.end.lat).subscribe(
  			res => {  
  				const data = res.routes[0];
  				const route = data.geometry.coordinates;	
  				console.log(route);
  			},err=>{console.error(err);});

  }

  changeMode(mode:string):void{
  	this.modeInput = mode;
  	console.log("cambio modo"+ mode);
  }


  onSelected() {
    console.log(this.selectedMovie);
    this.selectedMovie = this.selectedMovie;
    if(this.tmpPoints.length == 0){
    	this.tmpPoints = [];	
    }
    
    if(this.modeInput === 'start'){

    	console.log("selecciono inicio " + JSON.stringify (this.selectedMovie.geometry));
    	this.wayPoints.start = new Point(this.selectedMovie.geometry.coordinates[1],this.selectedMovie.geometry.coordinates[0]);
    	this.inicio = this.selectedMovie.place_name_es;
    	this.currentPos.lat = this.wayPoints.start.lat;
    	this.currentPos.lng = this.wayPoints.start.lng;
    	this.tmpPoints.push(this.wayPoints.start);
    }
    if(this.modeInput === 'end'){
    	console.log("selecciono fin " + JSON.stringify (this.selectedMovie.geometry));
    	this.wayPoints.end = new Point(this.selectedMovie.geometry.coordinates[1],this.selectedMovie.geometry.coordinates[0]);
    	this.fin = this.selectedMovie.place_name_es;

    	this.currentPos.lat = this.wayPoints.end.lat;
    	this.currentPos.lng = this.wayPoints.end.lng;
    	this.tmpPoints.push(this.wayPoints.end);
    }
  }

  private _filter(value: string): any[] {
    const filterValue =  value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

   private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  displayFn(subject:any){
  	return subject ? subject.place_name_es:"";
  }
  

  clearSelection() {
    this.selectedMovie = "";
    this.filteredOptions = [];
  }


  loadOption(){
  	//this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''));
  	this.myControl.valueChanges.pipe(startWith(''),
  		filter(res => {
          return res !== null && res.length >= this.minLengthTerm
        }),
        distinctUntilChanged(),
        debounceTime(1000),
        tap(() => {
          this.errorMsg = "";
          this.filteredOptions = [];
          this.isLoading = true;
        }),
        switchMap(value => this.servicio.getAddressesPlaces(value).pipe(finalize(() =>{this.isLoading = false})))
  		).subscribe((data:any) => {
  			console.log(JSON.stringify(data.features));
  			if(data.features==undefined){
  				this.errorMsg = data['Error'];
  				this.filteredOptions = [];
  			}else{
  				this.errorMsg="";
  				this.filteredOptions = data.features;
  			}	
  			console.log(this.filteredOptions);
  		});

  }

}

// just an interface for type safety.
export class Point {
  lat: number;
  lng: number;

  constructor(lat:number,lng:number){
  	this.lat=lat;
  	this.lng=lng;
  }
}

export class Option{
	name:string;
}

export class WayPoints{
	start:Point;
	end:Point;
}

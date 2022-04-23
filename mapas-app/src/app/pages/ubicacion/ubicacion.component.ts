import { Component, OnInit } from '@angular/core';
import { UbicacionService } from '../../services/ubicacion.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

	public latitude;
  	public longitude;

	constructor(private ubicacionService : UbicacionService) { }

	ngOnInit() {
		 let location = this.getLocation();
	}


	getLocation() {
	    this.ubicacionService.getPosition().then(pos => {
	        this.latitude = pos.lat;
	        this.longitude = pos.lng;
	    });
	    console.log("tomo coordenadas lat:"+this.latitude+" lng:"+this.longitude);
	}


}

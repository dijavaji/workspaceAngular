import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../model/marcador.class';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component'


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

	marcadores: Marcador[]= [];
	title = 'My first AGM project';
  	lat = -0.255833;
  	lng =  -78.520592;

	constructor(public snackBar: MatSnackBar, public dialog: MatDialog) { 
		//let nuevoMarcador = new Marcador(this.lat,this.lng);
		//this.marcadores.push(nuevoMarcador);
		if(localStorage.getItem("marcadores")){
			this.marcadores = JSON.parse(localStorage.getItem("marcadores"));
		}
	}

	ngOnInit() {
	}

	agregarMarcador(evento){
		console.log(evento.coords.lat);
		const coords : {lat:number,lng : number} = evento.coords;
		const nuevoMarcador = new Marcador(coords.lat,coords.lng);
		this.marcadores.push(nuevoMarcador);
		this.guardarStorage();
		// agrego un mensaje simple con material
		this.snackBar.open('Marcador agregado', 'Cerrar', {duration:3000});
	}

	borrarMarcador(i:number){
		console.log("borro marcador"+i);
		this.marcadores.splice(i,1);
		this.guardarStorage();
		// agrego un mensaje simple con material
		this.snackBar.open('Marcador borrado', 'Cerrar', {duration:3000});
	}

	editarMarcador(marcador:Marcador){
		console.log("editar marcador " + marcador);
		const dialogRef = this.dialog.open(MapaEditarComponent, {
      		width: '250px',
      		data: {titulo: marcador.titulo, desc: marcador.desc}
    	});

    	dialogRef.afterClosed().subscribe(result => {
      		console.log('The dialog was closed');
      		console.log( result);

      		if(!result){
      			return;	
      		}
      		marcador.titulo = result.titulo;
      		marcador.desc = result.desc;

      		this.guardarStorage();
     		// agrego un mensaje simple con material
			this.snackBar.open('Marcador actualizado', 'Cerrar', {duration:3000}); 		
    	});
	}

	guardarStorage(){
		localStorage.setItem("marcadores",JSON.stringify(this.marcadores));
	}

}

import { Component, OnInit } from '@angular/core';
import { Usuario} from "../../modelo/usuario";
import { UsuarioService } from "../../servicios/usuario.service";

@Component({
  selector: 'tech-usuario-crea',
  templateUrl: './usuario-crea.component.html',
  styles: []
})
export class UsuarioCreaComponent implements OnInit {

	usuario: Usuario = new Usuario();
	presentar = false;

	constructor(private employeeService: UsuarioService) { }

	ngOnInit() {
	}

	nuevoUsuario(): void {
	this.presentar = false;
	this.usuario = new Usuario();
	}

	guarda() {
	this.employeeService.crearUsuario(this.usuario)
	  .subscribe(data => console.log(data), error => console.log(error));
	this.usuario = new Usuario();
	}

	onSubmit() {
	this.presentar = true;
	this.guarda();
	}

}

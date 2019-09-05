import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Usuario } from "../../modelo/usuario";
import { UsuarioService } from "../../servicios/usuario.service";


@Component({
  selector: 'tech-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styles: []
})
export class UsuarioListaComponent implements OnInit {
	usuarios: Observable<Usuario[]>;
  	userSeleccionado: Usuario;

  	constructor(private usuarioServicio: UsuarioService) { }

	ngOnInit() {
		this.reloadData();
	}
	reloadData() {
		this.usuarios = this.usuarioServicio.getUsuarioLista();
	}

	eliminaUsuario(id: number) {
		this.usuarioServicio.eliminarUsuario(id)
	  .subscribe(
	    data => {
	      console.log(data);
	      this.reloadData();
	    },
	    error => console.log(error));
	}

	onSelect(user: Usuario): void {
	this.userSeleccionado = user;
	}

}

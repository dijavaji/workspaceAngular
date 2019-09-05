import { Component, OnInit, Input } from '@angular/core';
import { Usuario} from "../../modelo/usuario";
import { UsuarioService } from "../../servicios/usuario.service";
import { UsuarioListaComponent } from '../usuario-lista/usuario-lista.component';

@Component({
  selector: 'tech-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

	@Input() usuario: Usuario;

	constructor(private userServicio: UsuarioService, private listComponent: UsuarioListaComponent) { }

	ngOnInit() {
	}

	eliminaUser(){
		console.log(this.usuario);
		this.userServicio.eliminarUsuario(this.usuario.id).subscribe(res => {this.usuario = res;},err => {console.error(err);});
	}

}

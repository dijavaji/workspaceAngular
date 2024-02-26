import { Component } from '@angular/core';
import { Store, Action  } from '@ngrx/store';
import {IncrementarAction, DecrementarAction} from './contador/contador.actions';
import {AppState} from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tec-redux-test';
  contador :number;

  constructor(private store: Store<AppState>){
  	//this.contador=10;
    this.store.select('contador').subscribe(contador =>{
      //console.log(state);  //cualquier cambio que sufra el estado lo imprime en consola
      //this.contador = state.contador;
      this.contador = contador;
    });
  }

  incrementar(){
  	//this.contador++;
    /*const accion: Action ={
      type:'INCREMENTAR',
    };*/
    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar(){
  	//this.contador--;
    /*const accion: Action ={
      type:'DECREMENTAR',
    };*/
    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }
}

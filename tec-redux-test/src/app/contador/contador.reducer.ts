import {Action} from '@ngrx/store';

export function contadorReducer(state:number=10, action:Action){

	switch (action.type) {
		case "INCREMENTAR":
			
			return state+1;
		case "DECREMENTAR":
			// code...
			return state-1;
		default:
			return state;
	}
}
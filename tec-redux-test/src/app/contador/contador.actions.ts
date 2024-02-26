import {Action} from '@ngrx/store';

export const INCREMENTAR = '[contador] Incrementar';

export const DECREMENTAR = '[contador] Decrementar';

export const MULTIPLICAR = '[contador] Multiplicar';

export const DIVIDIR = '[contador] Dividir';

export const RESET = '[contador] Reset';


export class IncrementarAction implements Action{

	readonly type=INCREMENTAR;
}

export class DecrementarAction implements Action{

	readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action{
	readonly type = MULTIPLICAR;
	constructor(public payload:number){}
}

export class DividirAction implements Action{
	readonly type = DIVIDIR;
	constructor(public payload:number){}
}

export class ResetAction implements Action{

	readonly type = RESET;
}

export type actions = IncrementarAction | DecrementarAction | MultiplicarAction | DividirAction | ResetAction;
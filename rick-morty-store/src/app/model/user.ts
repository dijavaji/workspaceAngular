import {PersonName} from "./personName"; 
import {Address} from "./address"

export class User {

	id: number;
    name: PersonName;
    email: string;
    username: string;
    password: string;
    phone:string;
    address:Address;

    constructor() { 
    	this.name = new PersonName();
    	this.address = new Address();
    }

}

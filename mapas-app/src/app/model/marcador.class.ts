export class Marcador {

	private lat: number;
    private lng: number;
    public titulo: string;
    public desc: string;
    
    
    constructor(lat:number, lng: number) { 
    	this.lat = lat;
    	this.lng = lng;
        this.titulo = "na"
        this.desc = "na"
    }

}
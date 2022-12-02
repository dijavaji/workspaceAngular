import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tec-footer',
  templateUrl: './tec-footer.component.html',
  styleUrls: ['./tec-footer.component.css']
})
export class TecFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public autor: any = {nombre:'Technoloqie Asesoramiento Inform\u00e1tico.', anio:'2002'}; 
}
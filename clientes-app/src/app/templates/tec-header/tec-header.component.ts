import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tec-header',
  templateUrl: './tec-header.component.html',
  styleUrls: ['./tec-header.component.css']
})
export class TecHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public nombreApp : string = "App-clientes";
}
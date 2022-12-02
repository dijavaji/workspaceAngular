import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bienvenido';
  curso : string = 'Curso spring 5 con angular';
  profesor : string = 'Diego';

}

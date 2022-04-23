import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.sass']
})
export class FormSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

   onBuscar(value: string) {
    if (value && value.length > 3) {
      this.router.navigate(['/personaje-lista'], {
        queryParams: { q: value },
      });
    }
  }

}

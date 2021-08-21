
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Router} from '@angular/router';

import { filter, take } from 'rxjs/operators';
import {Personaje} from '@shared/modelo/personaje';
import { PersonajeService } from '@shared/servicios/personaje.service';
import { TrackHttpError } from '@shared/modelo/trackHttpError';

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-personaje-lista',
  templateUrl: './personaje-lista.component.html',
  styleUrls: ['./personaje-lista.component.sass']
})
export class PersonajeListaComponent implements OnInit {
	personajes: Personaje[] = [];

	info: RequestInfo = {
    	next: null,
	};

	showGoUpButton = false;

	private pageNum = 1;

	private query: string;

	private hideScrollHeight = 200;

	private showScrollHeight = 500;

	constructor(
    @Inject(DOCUMENT) private document:Document,
    private personajeSvc: PersonajeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.onUrlChanged();
  }

	ngOnInit() :void{
		this.getCharactersByQuery();
	}

	@HostListener('window:scroll', [])onWindowScroll():void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

	onScrollAbajo():void{
		if (this.info.next) {
		this.pageNum++;
		this.getDataFromService();
    }
  }

  onScrollArriba():void{
    this.document.body.scrollTop = 0; // Safari
    this.document.documentElement.scrollTop = 0; // Other
  }

  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.personajes = [];
        this.pageNum = 1;
        this.getCharactersByQuery();
      });
  }

	private getCharactersByQuery(): void {
		this.route.queryParams.pipe(take(1)).subscribe((params: ParamMap) => {
		this.query = params['q'];
		this.getDataFromService();
    });
  }

  private getDataFromService(): void {
    
  }

}

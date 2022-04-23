import {MediaMatcher} from '@angular/cdk/layout';
import { Component, OnInit,ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

	mobileQuery: MediaQueryList;
	shouldRun = true;

	//fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);

	fillerNav = [{name:"home",route:"", icon:"home"},{name:"ubicacion",route:"ubicacion", icon:"location_on"},{name:"rastreo",route:"rastreo", icon:"directions_car"},{name:"contacto",route:"", icon:"perm_contact_calendar"}]



	private _mobileQueryListener: () => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
    	this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    	this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnInit() {
	}

	ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}

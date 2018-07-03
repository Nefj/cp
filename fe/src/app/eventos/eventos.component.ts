import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  providers: [PeticionesService]
})
export class EventosComponent implements OnInit {
  public home;
  public events;
  
  constructor(private _peticionesService: PeticionesService) { }

  ngOnInit() {
    window.location.hash = 'init';
    this._peticionesService.getPage().subscribe(res => {
      this.home = res[0];
    })
    this._peticionesService.getEvents().subscribe(res => {
      this.events = res;
    })
  }

}

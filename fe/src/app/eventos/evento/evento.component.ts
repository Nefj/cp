import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-Evento',
  templateUrl: './Evento.component.html',
  styleUrls: ['./Evento.component.css'],
  providers: [PeticionesService]

})
export class EventoComponent implements OnInit {
  public eventId;
  public event;
  constructor(
    private route: ActivatedRoute,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    window.location.hash = 'init';
    this.route.params.subscribe(params => {
      this.eventId = params.id;
      this.findEvent();
    });
  }
  findEvent(){
    this._peticionesService.getEvent(this.eventId).subscribe(res => {
      this.event = res[0];
      this.event.line1= 'Entrenamiento de';
      console.log(this.event);
    })
  }

}

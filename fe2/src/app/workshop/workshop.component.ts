import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
import { Person } from '../modelo/person';
import { forEach } from '@angular/router/src/utils/collection';
import { StateKey } from '@angular/platform-browser';


@Component({
      selector: 'app-workshop',
      templateUrl: './workshop.component.html',
      styleUrls: ['./workshop.component.css'],
      providers: [PeticionesService]

})
export class WorkshopComponent implements OnInit {

      public lista_personasPorModulo = [];
      public lista_personasEventoTaller = [];
      public lista_personas = [];
      public lista;

      public workshops;
      public event;
      public modules;
      public inscriptions;

      public modularForAssist;
      public personId;
      /////////////////para jlistar por modulos////
      public moduleId;
      public eventId;
      public moduleName;

      //////////////////////////////////////////////
      constructor(
            private route: ActivatedRoute,
            private router: Router,
            private _peticionesService: PeticionesService
      ) { }

      ngOnInit() {
            // this.route.params.subscribe(params => {
            //       this.eventId = params.id;
            //       console.log(this.eventId)
            //       this._peticionesService.getEvent(this.eventId).subscribe(resp => {
            //             this.event = resp;
            //             this.queryModules();
            //             this.queryEventTallerInscription();


            //       });
            // });
            this.queryTaller();
      }

      queryTaller() {
            this._peticionesService.getTalleres().subscribe(response => {
                  this.workshops = response;
                  // this.lista_personas = this.lista;
                  console.log(this.workshops, response);
            })
      }
      cancelar() {
            window.history.back();
      }

      ngAfterViewInit() { }


}
export interface PersonEventModule {

      personId: string,
      eventId: string,
      moduleId: string,
}
export interface PersonItem {

      persons: string,
      name: string,
      ci: number,
      cellphone: number,
      canceled_price: number,
      assist: boolean
}
export interface EventModuleTaller {
      event: string,
      module: string,

}

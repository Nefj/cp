import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
import { Person } from '../modelo/person';
import { Identity,Roles } from '../services/global';
import { forEach } from '@angular/router/src/utils/collection';
import { StateKey } from '@angular/platform-browser';

@Component({
   selector: 'app-event',
   templateUrl: './event.component.html',
   styleUrls: ['./event.component.css'],
   providers: [PeticionesService]
})
export class EventComponent implements OnInit, AfterViewInit {
      public lista_personasPorModulo=[];

      public lista_modulos;
      public event;
      public modules;
      public inscriptions;

      public modularForAssist;
      public personId;
      public role;
      public activeEvent;
/////////////////para jlistar por modulos////
      public moduleId;
      public eventId;
      public moduleName;
      
      public certificateData;
//////////////////////////////////////////////
      constructor(
                 private route: ActivatedRoute,
                 private router: Router,
                 private _peticionesService: PeticionesService
                ) { }

      ngOnInit(){
         this.route.params.subscribe(params => {
         this.eventId = params.id;
         console.log(this.eventId)
            this.queryRol();
         
         });
         this.queryEventInscription();
      }
      queryEventInscription() {
            // this._peticionesService.getEventInscriptions(this.eventId).subscribe(
            // result => {
            //       this.event = result;
            //       this.activeEvent=this.event.active;
            //       this.queryModules();

            //       console.log(this.event);
            //       this.inscriptions = this.event.inscriptions;
            //       var total = this.event.total;   
            //       this.lista_personasPorModulo=this.inscriptions; 
            //       console.log('esta es la inscripcion de la persona');
            //       console.log(this.lista_personasPorModulo);      
            // },
            // error => {
            //       var errorMessage = <any>error;
            //       console.log(errorMessage);
            // }
            // );
      }

      queryModules() {
                   this._peticionesService.getModulos(this.event.programs).subscribe(
                      result => {
                         this.modules = result;
                         this.modules.sort((left,right)=>{
                               if(left.name<right.name)return -1;
                               if(left.name>right.name)return 1;
                               return 0;
                         });
                      } 
                   )
      }
      
      viewProfile(personId) {
            this.router.navigate(['home/profilePerson', personId]);
      }
      edit(personId) {
            this.router.navigate(['home/persons/edit', personId])
      }
      asistence(_id) {
                  this.personId = _id;
                  var idEvenPers = _id + '-' + this.eventId;
                  this.router.navigate(['home/event/asistencia', idEvenPers]);
      }
      control(_id){
                  this.personId = _id;
                  var idEvenPers = _id + '-' + this.eventId;
                  this.router.navigate(['home/event/controPago/', idEvenPers]);
      }
      cancelar(){
            //window.history.back();
            this.router.navigate(['home/eventos'])
      }
      ngAfterViewInit(){}

      queryRol(){
            //console.log(Identity.rol)
         this._peticionesService.getRole(Identity.rol).subscribe(
             result => {
              this.role = result;
     
                
     
             },
             error=>{
              var errorMessage = <any>error;
              console.log(errorMessage);
             }
         );
         }


}
export interface PersonEventModule{

      personId:string,
      eventId:string,
      moduleId:string,
}
export interface PersonItem{

      persons:string,
      name:string,
      ci:number,
      cellphone:number,
      canceled_price:number,
      price_event:number,
      assist:boolean
}

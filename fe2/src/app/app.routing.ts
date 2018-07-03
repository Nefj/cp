import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { PersonaComponent } from "./event/persona/persona.component";
import { AddPersonComponent } from './event/persona/addPerson/addPerson.component';
import { EditComponent } from "./event/persona/edit/edit.component";
import { SucursalComponent } from './sucursal/sucursal.component';
import { EditSucursalComponent } from './sucursal/editSucursal/editsucursal.component';
import { AddSucursalComponent } from './sucursal/addSucursal/addsucursal.component';
import { HeroFormComponent } from "./hero-form/hero-form.component";

import { Programa } from './modelo/programa';
import { ProgramaComponent } from './programa/programa.component';
import { EditProgramaComponent } from './programa/edit-programa/edit-programa.component';
import { AddProgramaComponent } from './programa/add-programa/add-programa.component';
import { ModuloComponent } from './modulo/modulo.component';
import { EditModuloComponent } from './modulo/edit-modulo/edit-modulo.component';
import { AddModuloComponent } from './modulo/add-modulo/add-modulo.component';

import { facilitadorComponent } from './facilitador/facilitador.component';
import { AddFacilitadorComponent } from './facilitador/add-facilitador/add-facilitador.component';
import { EditFacilitadorComponent } from './facilitador/edit-facilitador/edit-facilitador.component';
import { AddEventComponent } from './events/addEvent/addEvent.component';

import { WorkshopComponent } from "./workshop/workshop.component";
import { InicioComponent } from './inicio/inicio.component';
import { SomosComponent } from './somos/somos.component';
import { InteresComponent } from './interes/interes.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ConsultoriasComponent } from './consultorias/consultorias.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },//ruta basica
    { path: 'login', component: LoginComponent },
    {
        path: 'home', component: HomeComponent,
        children: [
            // { path: 'home', redirectTo: 'home', pathMatch: 'full' },
            { path: 'inicio', component: InicioComponent },
            { path: 'somos', component: SomosComponent },
            { path: 'eventos', component: EventsComponent },
            // { path: 'eventos/add', component: AddEventComponent },
            // { path: 'event/:id', component: EventComponent },
            { path: 'persons', component: PersonaComponent },
            // { path: 'persons/add', component: AddPersonComponent },
            // { path: 'persons/edit/:id', component: EditComponent },
            { path: 'sucursales', component: SucursalComponent },
            { path: 'sucursales/add', component: AddSucursalComponent },
            { path: 'sucursales/edit/:id', component: EditSucursalComponent },
            // { path: 'formulariobase', component: HeroFormComponent },
            { path: 'programas', component: ProgramaComponent },
            { path: 'programas/add', component: AddProgramaComponent },
            { path: 'programas/edit/:id', component: EditProgramaComponent },
            { path: 'modulos/:id', component: ModuloComponent },
            // { path: 'modulo/edit/:id', component: EditModuloComponent },
            // { path: 'modulo/add/:id', component: AddModuloComponent },
            { path: 'facilitador', component: facilitadorComponent },
            // { path: 'facilitador/add', component: AddFacilitadorComponent },
            // { path: 'facilitador/edit/:id', component: EditFacilitadorComponent },
            { path: 'talleres', component: WorkshopComponent },
            { path: 'consultorias', component: ConsultoriasComponent },
            { path: 'interes', component: InteresComponent },
            { path: 'contactanos', component: ContactanosComponent },
        ]
    },

    //{path: '', component: LoginFormComponent}
    { path: '**', component: HomeComponent }//ruta redir

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
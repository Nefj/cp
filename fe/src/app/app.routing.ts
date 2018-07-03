import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components
// import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SomosComponent } from './somos/somos.component';
import { TalleresComponent } from './talleres/talleres.component';
import { TallerComponent } from './talleres/taller/taller.component';
import { ProgramasComponent } from './programas/programas.component';
import { EventosComponent } from './eventos/eventos.component';
import { ConsultoriasComponent } from './consultorias/consultorias.component';
import { ConsultoriaComponent } from './consultorias/consultoria/consultoria.component';
import { InteresComponent } from './interes/interes.component';
import { InterComponent } from './interes/inter/inter.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ProgramaComponent } from './programas/programa/programa.component';
import { EventoComponent } from './eventos/evento/evento.component';
import { FacilitadorComponent } from './facilitador/facilitador.component';

// import { Programa } from './modelo/programa';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },//ruta basica
    { path: 'somos', component: SomosComponent },//ruta basica
    { path: 'talleres', component: TalleresComponent },//ruta basica
    { path: 'taller/:id', component: TallerComponent },//ruta basica
    { path: 'programas', component: ProgramasComponent },//ruta basica
    { path: 'programa/:id', component: ProgramaComponent },//ruta basica
    { path: 'eventos', component: EventosComponent },//ruta basica
    { path: 'evento/:id', component: EventoComponent },//ruta basica
    { path: 'consultorias', component: ConsultoriasComponent },//ruta basica
    { path: 'consultoria/:id', component: ConsultoriaComponent },//ruta basica
    { path: 'interes', component: InteresComponent },//ruta basica
    { path: 'inter/:id', component: InterComponent },//ruta basica
    { path: 'contactanos', component: ContactanosComponent },//ruta basica
    { path: 'facilitador/:id', component: FacilitadorComponent },//ruta basica
    { path: '**', component: HomeComponent }//ruta redir
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
// import { LocalStorage } from '@ngx-pwa/local-storage';
// import { AsyncLocalStorageModule } from 'angular-async-local-storage';
//modules
//import { AlertsModule } from 'angular-alert-module';
//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AppheaderComponent } from './home/plantilla/appheader/appheader.component';
import { AppfooterComponent } from './home/plantilla/appfooter/appfooter.component';
import { AppmenuComponent } from './home/plantilla/appmenu/appmenu.component';
import { AppsettingsComponent } from './home/plantilla/appsettings/appsettings.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { PersonaComponent } from "./event/persona/persona.component"
import { AlertComponent } from './events/alert/alert.component';


//Services
import { UserService } from './services/user.service';
import { SearchPipe } from './event/filtro/filtropersona.pipe';
import { FilterPipe } from "./event/persona/filter.pipe";
import { SucursalService } from './services/sucursal.service'


import { HttpClientModule } from '@angular/common/http';
import { AddProgramComponent } from './events/addProgram/addProgram.component';
import { AddEventComponent } from './events/addEvent/addEvent.component';
import { AddPersonComponent } from './event/persona/addPerson/addPerson.component';


//Graphics
// import { ChartsModule } from 'ng2-charts';


import { SucursalComponent } from './sucursal/sucursal.component';
import { AddSucursalComponent } from './sucursal/addSucursal/addsucursal.component';
import { EditSucursalComponent } from './sucursal/editSucursal/editsucursal.component';
import { EditComponent } from './event/persona/edit/edit.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

import { ProgramaComponent } from './programa/programa.component';
import { EditProgramaComponent } from './programa/edit-programa/edit-programa.component';
import { AddProgramaComponent } from './programa/add-programa/add-programa.component';
import { ModuloComponent } from './modulo/modulo.component';
import { EditModuloComponent } from './modulo/edit-modulo/edit-modulo.component';
import { AddModuloComponent } from './modulo/add-modulo/add-modulo.component';



import { facilitadorComponent } from './facilitador/facilitador.component';
import { AddFacilitadorComponent } from './facilitador/add-facilitador/add-facilitador.component';
import { EditFacilitadorComponent } from './facilitador/edit-facilitador/edit-facilitador.component';
import { AlertCreateComponent } from './programa/alert-create/alert-create.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { InicioComponent } from './inicio/inicio.component';
import { SomosComponent } from './somos/somos.component';
import { InteresComponent } from './interes/interes.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ConsultoriasComponent } from './consultorias/consultorias.component';
import { ObjKey } from './obj-key.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    EventsComponent,
    EventComponent,
    AddProgramComponent,
    AddEventComponent,
    AddPersonComponent,
    PersonaComponent,


    ObjKey,
    SearchPipe,
    EditComponent,
    FilterPipe,
    SucursalComponent,
    AddSucursalComponent,
    EditSucursalComponent,
    HeroFormComponent,



    ProgramaComponent,
    EditProgramaComponent,
    AddProgramaComponent,
    ModuloComponent,
    EditModuloComponent,
    AddModuloComponent,

    facilitadorComponent,
    AddFacilitadorComponent,
    EditFacilitadorComponent,
    AlertComponent,
    AlertCreateComponent,
    WorkshopComponent,
    InicioComponent,
    SomosComponent,
    InteresComponent,
    ContactanosComponent,
    ConsultoriasComponent,
  ],
  imports: [
    BrowserModule,
    // LocalStorage,
    routing,//aniadir routing
    HttpClientModule,
    FormsModule,
    HttpModule,
    // ChartsModule,
    // Specify this module as an import
    //AlertsModule.forRoot()

  ],
  providers: [
    appRoutingProviders,
    UserService,
    FilterPipe,
    SucursalService,
  ],//aniadir appRo..
  bootstrap: [AppComponent]
})
export class AppModule { }
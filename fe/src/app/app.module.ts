import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import{ routing, appRoutingProviders } from './app.routing';

import { AgmCoreModule } from '@agm/core';


import { NavService } from "./services/nav.service";
import {SlideshowModule} from './services/slideshow/slideshow.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MasInformacionComponent } from './mas-informacion/mas-informacion.component';
import { FooterComponent } from './footer/footer.component';
import { RedirectComponent } from './home/redirect/redirect.component';
import { SomosComponent } from './somos/somos.component';
import { ProgramasComponent } from './programas/programas.component';
import { EventosComponent } from './eventos/eventos.component';
import { TalleresComponent } from './talleres/talleres.component';
import { TallerComponent } from './talleres/taller/taller.component';
import { ConsultoriasComponent } from './consultorias/consultorias.component';
import { InteresComponent } from './interes/interes.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ProgramaComponent } from './programas/programa/programa.component';
import { EventoComponent } from './eventos/evento/evento.component';
import { InterComponent } from './interes/inter/inter.component';
import { ConsultoriaComponent } from './consultorias/consultoria/consultoria.component';
import { FacilitadorComponent } from './facilitador/facilitador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MasInformacionComponent,
    FooterComponent,
    RedirectComponent,
    SomosComponent,
    ProgramasComponent,
    EventosComponent,
    TalleresComponent,
    TallerComponent,
    ConsultoriasComponent,
    InteresComponent,
    ContactanosComponent,
    ProgramaComponent,
    EventoComponent,
    InterComponent,
    ConsultoriaComponent,
    FacilitadorComponent
  ],
  imports: [
    SlideshowModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJEdVHjvmAtnZ-QDJ35AwfwEk0fphDalw'
    })
  ],
  providers: [
    appRoutingProviders,
    NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

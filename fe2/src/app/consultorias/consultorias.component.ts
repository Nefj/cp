import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-consultorias',
  templateUrl: './consultorias.component.html',
  styleUrls: ['./consultorias.component.css'],
  providers: [PeticionesService]
})
export class ConsultoriasComponent implements OnInit {
  public consultorias;
  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this.queryConsultorias();
  }

  queryConsultorias() {
    this._peticionesService.getConsultorias().subscribe(response => {
      this.consultorias = response;
      // this.lista_personas = this.lista;
      console.log(this.consultorias, response);
    })
  }
}

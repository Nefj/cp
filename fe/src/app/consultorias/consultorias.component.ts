import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-consultorias',
  templateUrl: './consultorias.component.html',
  styleUrls: ['./consultorias.component.css'],
  providers: [PeticionesService]
})
export class ConsultoriasComponent implements OnInit {
  public home;
  public consulting;
  constructor(private _peticionesService: PeticionesService) { }

  ngOnInit() {
    window.location.hash = 'init';
    this._peticionesService.getPage().subscribe(res => {
      this.home = res[0];
    })
    this._peticionesService.getConsults().subscribe(res => {
      this.consulting = res;
    })
  }

}

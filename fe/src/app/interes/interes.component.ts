import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';


@Component({
  selector: 'app-interes',
  templateUrl: './interes.component.html',
  styleUrls: ['./interes.component.css'],
  providers: [PeticionesService]

})
export class InteresComponent implements OnInit {
  public home;

  constructor(private _peticionesService: PeticionesService) { }

  ngOnInit() {
    window.location.hash = 'init';
    this._peticionesService.getPage().subscribe(res => {
      this.home = res[0];
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css'],
  providers: [PeticionesService]
})
export class TalleresComponent implements OnInit {
  public home;
  public workshops;
  constructor(private _peticionesService: PeticionesService) { }

  ngOnInit() {
    window.location.hash = 'init';
    this._peticionesService.getPage().subscribe(res => {
      this.home = res[0];
    })
    this._peticionesService.getWorkshops().subscribe(res => {
      this.workshops = res;
    })
  }

}

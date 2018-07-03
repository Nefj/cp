import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-taller',
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.component.css'],
  providers: [PeticionesService]

})
export class TallerComponent implements OnInit {
  public tallerId;
  public workshop;
  constructor(
    private route: ActivatedRoute,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    window.location.hash = 'init';
    this.route.params.subscribe(params => {
      this.tallerId = params.id;
      this.findWorkshop();
    });
  }
  findWorkshop(){
    this._peticionesService.getWorkshop(this.tallerId).subscribe(res => {
      console.log(this.workshop);
      this.workshop = res;
    })
  }

}

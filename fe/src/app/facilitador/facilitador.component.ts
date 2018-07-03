import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-facilitador',
  templateUrl: './facilitador.component.html',
  styleUrls: ['./facilitador.component.css'],
  providers: [PeticionesService]
})
export class FacilitadorComponent implements OnInit {
  public facilitatorId;
  public facilitator;
  constructor(
    private route: ActivatedRoute,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    window.location.hash = 'init';
    this.route.params.subscribe(params => {
      this.facilitatorId = params.id;
      this.findFacilitator();
    });
  }
  findFacilitator() {
    this._peticionesService.getFacilitator(this.facilitatorId).subscribe(res => {
      this.facilitator = res;
      console.log(this.facilitator);
      // this.facilitator.line1= 'Facilitador'
    })
  }

}

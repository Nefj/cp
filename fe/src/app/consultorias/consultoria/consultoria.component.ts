import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-consultoria',
  templateUrl: './consultoria.component.html',
  styleUrls: ['./consultoria.component.css'],
  providers: [PeticionesService]
})
export class ConsultoriaComponent implements OnInit {
  public consultId;
  public consult
  constructor(
    private route: ActivatedRoute,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    window.location.hash = 'init';
    this.route.params.subscribe(params => {
      this.consultId = params.id;
      this.findConsult();
    });
  }
  findConsult() {
    this._peticionesService.getConsult(this.consultId).subscribe(res => {
      this.consult = res;
      this.consult.line1 = 'Consultoria en'
      // console.log(this.consult)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css'],
  providers: [PeticionesService]

})
export class ProgramaComponent implements OnInit {
  public programId;
  public program;
  constructor(
    private route: ActivatedRoute,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    window.location.hash = 'init';
    this.route.params.subscribe(params => {
      this.programId = params.id;
      this.findProgram();
    });
  }
  findProgram(){
    this._peticionesService.getProgram(this.programId).subscribe(res => {
      this.program = res;
      this.program.line1= 'Programa de'
    })
  }

}

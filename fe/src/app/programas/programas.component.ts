import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.css'],
  providers: [PeticionesService]
})
export class ProgramasComponent implements OnInit {
  public home;
  public programs;
  
  constructor(private _peticionesService: PeticionesService) { }

  ngOnInit() {
    window.location.hash = 'init';
    this._peticionesService.getPage().subscribe(res => {
      this.home = res[0];
    })
    this._peticionesService.getPrograms().subscribe(res => {
      this.programs = res;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [PeticionesService]

})
export class FooterComponent implements OnInit {
  public programs;
  public workshops;
  public consults;
  public home;

  constructor(private _peticionesService: PeticionesService) { }

  ngOnInit() {
    this._peticionesService.getPrograms().subscribe(res => {
      this.programs = res;
    })
    this._peticionesService.getWorkshops().subscribe(res => {
      this.workshops = res;
    })
    this._peticionesService.getConsults().subscribe(res => {
      this.consults = res;
    })
    this._peticionesService.getPage().subscribe(res => {
      this.home = res[0];
      console.log(this.home);
    })
  }

}

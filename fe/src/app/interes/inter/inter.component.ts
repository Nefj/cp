import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-inter',
  templateUrl: './inter.component.html',
  styleUrls: ['./inter.component.css'],
  providers: [PeticionesService]
})
export class InterComponent implements OnInit {
  public home;
  public interes;
  interesId;
  constructor(
    private route: ActivatedRoute,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    window.location.hash = 'init';
    this.route.params.subscribe(params => {
      this.interesId = params.id;
      this.findInteres();
    });
  }
  findInteres() {
    this._peticionesService.getPage().subscribe(res => {
      this.home = res[0];
      for (let i = 0; i < this.home.interes.list.length; i++) {
        if(this.home.interes.list[i]._id == this.interesId){
          this.interes = this.home.interes.list[i];
        }        
      }
    })
  }

}

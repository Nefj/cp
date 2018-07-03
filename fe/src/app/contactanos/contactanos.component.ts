import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css'],
  providers: [PeticionesService]
})
export class ContactanosComponent implements OnInit {
  public offices;
  // title: string = 'My first AGM project';
  lat: number = -17.752208;
  lng: number = -63.169071;
  constructor(private _peticionesService: PeticionesService) { }

  ngOnInit() {
    window.location.hash = 'init';
    this._peticionesService.getSucursales().subscribe(res => {
      this.offices = res;
      for (let i = 0; i < this.offices.length; i++) {
        if (this.offices[i].name == 'Santa Cruz') {
          setTimeout(() => {
            (<HTMLElement>document.getElementById(this.offices[i].name)).style.color = '#3eb4b6';
          }, 0);
        }
      }
    })
  }
  load(of_id) {
    for (let i = 0; i < this.offices.length; i++) {
      if (this.offices[i]._id == of_id) {
        setTimeout(() => {
          (<HTMLElement>document.getElementById(this.offices[i].name)).style.color = '#3eb4b6';
          this.lat = this.offices[i].lat;
          this.lng = this.offices[i].lng;
        }, 0);
      } else {
        setTimeout(() => {
          (<HTMLElement>document.getElementById(this.offices[i].name)).style.color = '#555';
        }, 0);
      }
    }
  }
}

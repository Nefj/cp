import { Component, OnInit, ViewChild } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { NavService } from "../services/nav.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PeticionesService]
})
export class HomeComponent implements OnInit {
  public home;
  public imageUrlArray = [];
  public height = '34em';
  public events;
  public show = false;
  constructor(
    private _peticionesService: PeticionesService,
    private navService: NavService,
  ) { }

  ngOnInit() {
    window.location.hash = 'init';
    this._peticionesService.getPage().subscribe(res => {
      this.home = res[0];
      this._peticionesService.getEvents().subscribe(res => {
        this.events = res;
        if (this.events.length > 0) {
          this.show = true
          for (let i = 0; i < this.events.length; i++) {
            this.imageUrlArray.push({ url: this.events[i].photo, clickAction: this.test, tittle: this.events[i].name, caption: this.events[i].name + ' ' + this.events[i].date_start })
          }
        }
      })
    })
  }
  test() {
    return 1;
  }
  send(state) {
    this.navService.navUpdated.emit(state);
  }
  info() {
    window.location.hash = 'info';
  }
  read(num) {
    switch (num) {
      case 1:
        (<HTMLElement>document.getElementById('uno')).style.display = 'inherit';
        break;
      case 2:
        (<HTMLElement>document.getElementById('uno')).style.display = 'inherit';
        break;

      default:
        break;
    }
  }
  hide(num) {
    location.href = '/#uno';
    switch (num) {
      case 1:
        (<HTMLElement>document.getElementById('uno')).style.display = 'none';
        break;
      case 2:
        (<HTMLElement>document.getElementById('uno')).style.display = 'none';
        break;
      default:
        break;
    }
  }
}

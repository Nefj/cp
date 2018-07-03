import { Component, OnInit } from '@angular/core';
import { navBar } from '../services/global';
import { NavService } from '../services/nav.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public inicio = '#999';
  public somos = '#999';
  public programas = '#999';
  public talleres = '#999';
  public consultorias = '#999';
  public interes = '#999';
  public contactanos = '#999';
  constructor(
    private navService: NavService,
    private router: Router,
  ) {
    this.navService.navUpdated.subscribe((status: number) => {
      this.navColor(status);
    })
  }

  ngOnInit() {
    this.inicio = navBar.inicio;
    this.somos = navBar.somos;
    this.programas = navBar.programas;
    this.talleres = navBar.talleres;
    this.consultorias = navBar.consultorias;
    this.interes = navBar.interes;
    this.contactanos = navBar.contactanos;
  }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  closeNav() {
    var x = document.getElementById("myTopnav");
    x.className === "topnav responsive" ? this.myFunction() : 0;
  }
  navColor(val) {
    this.restart();
    switch (val) {
      case 1:
        this.inicio = '#fff';
        this.closeNav();
        this.router.navigate(['']);
        break;
      case 2:
        this.somos = '#fff';
        this.closeNav();
        this.router.navigate(['somos']);
        break;
      case 3:
        this.programas = '#fff';
        this.closeNav();
        this.router.navigate(['programas']);
        break;
      case 4:
        this.talleres = '#fff';
        this.closeNav();
        this.router.navigate(['talleres']);
        break;
      case 5:
        this.consultorias = '#fff';
        this.closeNav();
        this.router.navigate(['consultorias']);
        break;
      case 6:
        this.interes = '#fff';
        this.closeNav();
        this.router.navigate(['interes']);
        break;
      case 7:
        this.contactanos = '#fff';
        this.closeNav();
        this.router.navigate(['contactanos']);
        break;
      default:
        break;
    }
  }
  restart() {
    this.inicio = '#999';
    this.somos = '#999';
    this.programas = '#999';
    this.talleres = '#999';
    this.consultorias = '#999';
    this.interes = '#999';
    this.contactanos = '#999';
  }
}

import { Component, OnInit } from '@angular/core';
import { Offices } from '../../modelo/offices';
import { SucursalService } from '../../services/sucursal.service';
import { ActivatedRoute, Router } from "@angular/router";
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';


@Component({
  selector: 'app-editsucursal',
  templateUrl: './editsucursal.component.html',
  styleUrls: ['./editsucursal.component.css']
})
export class EditSucursalComponent implements OnInit {

  public office: Offices;
  public sucursal;
  private officeId;
  constructor(
    private _peticionSucursalService: SucursalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.office = new Offices('', '', null, '', null);//name,ubicacion,caja,departament,company_id
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.officeId = params.id;
      // console.log(this.eventId)
      // this.queryRol();

    });
    this.queryCompany();
  }
  onSubmit() {
    console.log(this.office);
    this._peticionSucursalService.editOffice(this.office).subscribe(
      result => {
        var esperado = result;
        // console.log(esperado);
        // this.router.navigate(['home/event', this.eventId]);
        alert('Se Creo correctamente la Sucursal');
        this.router.navigate(['home/sucursal']);
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        alert('Error al Crear Sucursal verifique los datos');
      }
    );
  }
  queryCompany() {
    this._peticionSucursalService.getSucursal(this.officeId).subscribe(
      result => {
        this.office = result;
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        alert('No existe compañia');
      }
    );
  }
  cancelar() {
    this.router.navigate(['home/sucursales']);
  }
}

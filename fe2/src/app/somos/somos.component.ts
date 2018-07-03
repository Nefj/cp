import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-somos',
  templateUrl: './somos.component.html',
  styleUrls: ['./somos.component.css'],
  providers: [PeticionesService]
})
export class SomosComponent implements OnInit {
  public page;
  private id;
  private file;

  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this._peticionesService.getInicio().subscribe(res => {
      this.page = res[0].somos;
      this.id = res[0]._id;
    });
  }
  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

  saveInicio() {
    if (this.file == undefined) {
      this._peticionesService.putSomosInicio(this.page.inicio, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        });
    } else {
      this._peticionesService.putSomosInicioF(this.file, this.page.inicio, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        });
    }
  }

  
  saveVersion() {
    this._peticionesService.putVersion(this.page.version, this.id).subscribe(
      res => {
        alert('Guardado Exitosamente');
      }, err => {
        var errorMessage = <any>err;
        console.log(errorMessage);
      }
    )
  }
}

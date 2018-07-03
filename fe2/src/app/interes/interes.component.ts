import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-interes',
  templateUrl: './interes.component.html',
  styleUrls: ['./interes.component.css'],
  providers: [PeticionesService]
})
export class InteresComponent implements OnInit {
  public page;
  private id;
  private file;
  private fileInteres = [];
  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this._peticionesService.getInicio().subscribe(res => {
      this.page = res[0].interes;
      console.log(this.page);
      this.id = res[0]._id;
    });
  }
  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }
  handleFileInputInteres(files: FileList, id) {
    this.fileInteres.push({ file: files.item(0), id: id });
    // this.fileInteres.push(filesInteres.item(0));
  }

  saveInicio() {
    if (this.file == undefined) {
      this._peticionesService.putInteresInicio(this.page.inicio, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        });
    } else {
      this._peticionesService.putInteresInicioF(this.file, this.page.inicio, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        });
    }
  }
  saveInteres(interesId) {
    var list;
    this.page.list.forEach(l => {
      if (l._id == interesId) {
        list = l;
      }
    });
    if (this.fileInteres.length == 0) {
      // console.log(list);
      this._peticionesService.putInteresList(list, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        });
    } else {
      this._peticionesService.putInteresListF(this.fileInteres, list, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        });
    }
  }

}

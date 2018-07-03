import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [PeticionesService],
  // pipes: []
})
export class InicioComponent implements OnInit {
  public page;
  private id;
  private file;
  private fileOur;
  private filesTeam = [];
  private filesGalery = [];
  private filesClients = [];
  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this._peticionesService.getInicio().subscribe(res => {
      this.page = res[0].home;
      this.id = res[0]._id;
    });
  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }
  handleFileInputOur(files: FileList) {
    this.fileOur = files.item(0);
  }
  handleFileInputTeam(files: FileList, id) {
    // console.log(id);
    this.filesTeam.push({ file: files.item(0), id: id });
  }
  handleFileInputGalery(files: FileList, id) {
    // console.log(id);
    this.filesGalery.push({ file: files.item(0), id: id });
  }
  handleFileInputClients(files: FileList, id) {
    // console.log(id);
    this.filesClients.push({ file: files.item(0), id: id });
  }

  saveInicio() {
    if (this.file == undefined) {
      this._peticionesService.putInicio(this.page.inicio, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        });
    } else {
      this._peticionesService.putInicioF(this.file, this.page.inicio, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        });
    }
  }
  saveService() {
    this._peticionesService.putService(this.page.services, this.id).subscribe(
      res => {
        alert('Guardado Exitosamente');
      }, err => {
        var errorMessage = <any>err;
        console.log(errorMessage);
      }
    )
  }
  saveOur() {
    if (this.fileOur == undefined) {
      this._peticionesService.putOur(this.page.our, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        }, err => {
          var errorMessage = <any>err;
          console.log(errorMessage);
        }
      )
    } else {
      this._peticionesService.putOurF(this.fileOur, this.page.our, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        });
    }
  }
  saveTeam() {
    if (this.filesTeam.length == 0) {
      this._peticionesService.putTeam(this.page.team, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        }, err => {
          var errorMessage = <any>err;
          console.log(errorMessage);
        }
      )
    } else {
      this._peticionesService.putTeamF(this.filesTeam, this.page.team, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        }, err => {
          var errorMessage = <any>err;
          console.log(errorMessage);
        }
      )
    }
  }
  saveGalery() {
    if (this.filesGalery.length == 0) {
      this._peticionesService.putGalery(this.page.galery, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        }, err => {
          var errorMessage = <any>err;
          console.log(errorMessage);
        }
      )
    } else {
      this._peticionesService.putGaleryF(this.filesGalery, this.page.galery, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        }, err => {
          var errorMessage = <any>err;
          console.log(errorMessage);
        }
      )
    }
  }
  saveClients() {
    if (this.filesClients.length == 0) {
      this._peticionesService.putClients(this.page.clients, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        }, err => {
          var errorMessage = <any>err;
          console.log(errorMessage);
        }
      )
    } else {
      this._peticionesService.putClientsF(this.filesClients, this.page.clients, this.id).subscribe(
        res => {
          alert('Guardado Exitosamente');
        }, err => {
          var errorMessage = <any>err;
          console.log(errorMessage);
        }
      )
    }
  }

}

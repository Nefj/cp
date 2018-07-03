import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { HttpEvent } from "@angular/common/http"
import { GLOBAL } from './global';
// import "rxjs/add/operator/subscribe";
import { Observable } from 'rxjs'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CATCH_ERROR_VAR } from "@angular/compiler/src/output/abstract_emitter";

@Injectable()
export class PeticionesService {
  public url: string = GLOBAL.url;

  constructor(
    // private _httpClient: HttpClient,
    private _http: HttpClient

  ) {
    // this.url = "https://jsonplaceholder.typicode.com/users";

  }
  getCatEgresos() {
    return this._http.get(this.url + 'categoriaEgresos').subscribe((res: Response) => res);
  }
  getEvents() {
    return this._http.get(this.url + 'events');
  }
  getEvent(id) {
    return this._http.get(this.url + 'events/' + id);
  }
  addProgram(program) {
    let body = JSON.stringify(program);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(this.url + 'programs/add', body, { headers: headers }).subscribe((res: Response) => res);
  }
  getConsults() {
    return this._http.get(this.url + 'consults');
  }
  getConsult(_id) {
    return this._http.get(this.url + 'consults/' + _id);
  }
  getWorkshops() {
    return this._http.get(this.url + 'workshop');
  }
  getWorkshop(_id) {
    return this._http.get(this.url + 'workshop/' + _id);
  }
  getPrograms() {
    return this._http.get(this.url + 'programs');
  }
  getProgram(_id) {
    return this._http.get(this.url + 'programs/' + _id);
  }
  addModulo(modulo) {
    let body = JSON.stringify(modulo);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(this.url + 'modules/add', body, { headers: headers }).subscribe((res: Response) => res);
  }
  getModulos(idProgram) {
    console.log(idProgram)
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.get(this.url + 'modules/lista/' + idProgram, { headers: headers }).subscribe((res: Response) => res);
  }
  addEvent(event) {
    let body = JSON.stringify(event);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(this.url + 'events', body, { headers: headers }).subscribe((res: Response) => res);
  }
  addPerson(person) {
    let body = JSON.stringify(person);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(this.url + 'persons', body, { headers: headers }).subscribe((res: Response) => res);
  }
  getPerson(_id) {
    return this._http.get(this.url + 'persons/' + _id).subscribe((res: Response) => res);
  }

  getFacilitadores() {
    return this._http.get(this.url + 'facilitators').subscribe((res: Response) => res);
  }
  getFacilitator(id) {
    return this._http.get(this.url + 'facilitators/' + id);
  }
  getRole(id) {
    return this._http.get(this.url + 'users/rolName/' + id).subscribe((res: Response) => res);
  }

  getSucursales() {
    return this._http.get(this.url + 'offices');
  }
  getSucursal(id) {

    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.get(this.url + 'offices/' + id, { headers: headers }).subscribe((res: Response) => res);
  }
  getRoles() {
    return this._http.get(this.url + 'roles').subscribe((res: Response) => res);
  }

  postFile(fileToUpload: File): Observable<Object> {
    const endpoint = this.url + 'persons/upload';
    // const endpoint = this.url + 'importFromExcel/upload';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    let headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    // let options = new RequestOptions({ headers: headers });
    return this._http.post(endpoint, formData, { headers: headers });
    // .catch((e) => Observable.throw(e))
    // .subscribe();
  }

  getPage() {
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.get(this.url + 'pages', { headers: headers });
  }

  // getCi(ci) {
  //   return this._http.get(this.url + 'persons/existCi/' + ci).subscribe((res: Response) => res);
  // }
  // getPersonProgram(idPerson, idProfile) {
  //   var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   let body = JSON.stringify({ profileId: idProfile });
  //   return this._http.post(this.url + 'persons/profile/' + idPerson, body).subscribe((res: Response) => res);
  // }
  // postPersonProgramDetails(idPerson, idProfile) {
  //   var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   let body = JSON.stringify({ profileId: idProfile });
  //   return this._http.post(this.url + 'persons/descriptionProfile/' + idPerson, body, { headers: headers }).subscribe((res: Response) => res);
  // }
  // postRequirement(id, idProgram) {
  //   var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   let body = JSON.stringify({ programId: idProgram });
  //   return this._http.post(this.url + 'events/requirements/' + id, body, { headers: headers }).subscribe((res: Response) => res);
  // }
  // updateProfilePerson(idPerson, idP, photo, ci, titulo) {
  //   var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   let body = JSON.stringify({ profileId: idP, photo, ci, titulo });
  //   return this._http.put(this.url + 'persons/profile/' + idPerson, body, { headers: headers }).subscribe((res: Response) => res);
  // }
  // getPersons() {
  //   return this._http.get(this.url + 'persons').subscribe((res: Response) => res);
  // }
  // getEventConfirmed(id) {
  //   return this._http.get(this.url + 'events/' + id).subscribe((res: Response) => res);
  // }

  // addFacilitador(user) {
  //   let body = JSON.stringify(user);
  //   var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   return this._http.post(this.url + 'facilitators/register', body, { headers: headers }).subscribe((res: Response) => res);
  // }
  // updateFacilitador(facilitador_object) {
  //   console.log(facilitador_object);
  //   let body = JSON.stringify(facilitador_object);
  //   var idfacilitador = facilitador_object._id;
  //   // console.log(body);
  //   var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   return this._http.put(this.url + 'facilitators/update/' + idfacilitador, body, { headers: headers }).subscribe((res: Response) => res);
  // }
  // getMejorEjecutivo(_id) {
  //   return this._http.get(this.url + 'events/mejorEjecutivo/' + _id).subscribe((res: Response) => res);
  // }

  // updatePerson(event_object) {
  //   let body = JSON.stringify(event_object);
  //   var idPerson = event_object._id;
  //   // console.log(body);
  //   var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   return this._http.put(this.url + 'persons/' + idPerson, body, { headers: headers }).subscribe((res: Response) => res);
  // }
  // //return this._http.post(this.url + 'events/edit',body,{headers : headers}).subscribe((res:Response)=>res);
  // //.catch(this.handleError);
  // updatePersonOcupation(descOcupation, id) {
  //   let body = JSON.stringify(descOcupation);
  //   var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   return this._http.put(this.url + 'persons/ocupation/' + id, body, { headers: headers }).subscribe((res: Response) => res);
  // }

  // updateUsers (user: User): Observable<null> {
  //   return this.http.put(this.usersUrl, user, httpOptions).pipe(
  //     tap(_ => this.log(`updated user id=${user.id}`)),
  //     catchError(this.handleError<any>('updateUser'))
  //   );
  // }

  // updateUser(user_object) {
  //   console.log(user_object);
  //   let body = JSON.stringify(user_object);
  //   var idUser = user_object._id;
  //   //console.log(body);
  //   var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   return this._http.put(this.url + 'users/' + idUser, body, { headers: headers }).subscribe((res: Response) => res);
  // }
  // updateProgram(program_object) {
  //   //   console.log(program_object, 'test');
  //   let body = JSON.stringify(program_object);
  //   var idProgram = program_object._id;
  //   // console.log(body);
  //   var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   return this._http.put(this.url + 'programs/edit/' + idProgram, body, { headers: headers }).subscribe((res: Response) => res);
  // }

  // getList(id) {
  //   return this._http.get(this.url + 'lists/person/' + id).subscribe((res: Response) => res);
  // }

  // getInscriptionPerson(_id) {
  //   return this._http.get(this.url + 'persons/inscriptionPerson/' + _id).subscribe((res: Response) => res);
  // }

  // getOfficeFromUser(_id) {
  //   return this._http.get(this.url + 'offices/officeFromUser/' + _id).subscribe((res: Response) => res);
  // }

  // getEjecutivoToEdit(ejecutivoId) {
  //   var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   return this._http.get(this.url + 'users/getEjecutivoToEdit/' + ejecutivoId, { headers: headers }).subscribe((res: Response) => res);

  // }

}

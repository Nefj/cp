import { Injectable } from "@angular/core";
import { HttpModule, Http, Response, Headers } from "@angular/http";
import { GLOBAL } from './global';
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
  getInicio() {
    return this._http.get(this.url + 'pages');
  }
  putInicio(inicio, id) {
    let body = JSON.stringify(inicio);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(this.url + 'pages/home/inicio/' + id, body, { headers: headers });
  }
  putInicioF(fileToUpload: File, inicio, id): Observable<Object> {
    const endpoint = this.url + 'pages/home/inicioF/' + id;
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    formData.append('body', JSON.stringify({ inicio: inicio }));
    let headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this._http
      .put(endpoint, formData, { headers: headers })
  }
  putService(services, id) {
    let body = JSON.stringify(services);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(this.url + 'pages/home/services/' + id, body, { headers: headers });
  }
  putOur(our, id) {
    let body = JSON.stringify(our);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(this.url + 'pages/home/our/' + id, body, { headers: headers });
  }
  putOurF(fileToUpload: File, our, id): Observable<Object> {
    const endpoint = this.url + 'pages/home/ourF/' + id;
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    formData.append('body', JSON.stringify({ our: our }));
    let headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this._http
      .put(endpoint, formData, { headers: headers })
  }
  putTeam(team, id) {
    let body = JSON.stringify(team);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(this.url + 'pages/home/team/' + id, body, { headers: headers });
  }
  putTeamF(filesToUpload: fileObj[], team, id): Observable<Object> {
    const endpoint = this.url + 'pages/home/teamF/' + id;
    const formData: FormData = new FormData();
    // formData.append('fileKey', filesToUpload[0], filesToUpload[0].name);
    // for (const file: fileObj in filesToUpload) {
    const fn = [];
    for (let i = 0; i < filesToUpload.length; i++) {
      fn.push(filesToUpload[i].id);
      formData.append(filesToUpload[i].id, filesToUpload[i].file, filesToUpload[i].file.name);
    }
    // }
    formData.append('body', JSON.stringify({ team: team, fileName: fn }));
    let headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this._http
      .put(endpoint, formData, { headers: headers })
  }
  putGalery(galery, id) {
    let body = JSON.stringify(galery);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(this.url + 'pages/home/galery/' + id, body, { headers: headers });
  }
  putGaleryF(filesToUpload: fileObj[], galery, id): Observable<Object> {
    const endpoint = this.url + 'pages/home/galeryF/' + id;
    const formData: FormData = new FormData();
    const fn = [];
    for (let i = 0; i < filesToUpload.length; i++) {
      fn.push(filesToUpload[i].id);
      formData.append(filesToUpload[i].id, filesToUpload[i].file, filesToUpload[i].file.name);
    }
    formData.append('body', JSON.stringify({ galery: galery, fileName: fn }));
    let headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this._http
      .put(endpoint, formData, { headers: headers })
  }
  putClients(clients, id) {
    let body = JSON.stringify(clients);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(this.url + 'pages/home/Clients/' + id, body, { headers: headers });
  }
  putClientsF(filesToUpload: fileObj[], clients, id): Observable<Object> {
    const endpoint = this.url + 'pages/home/clientsF/' + id;
    const formData: FormData = new FormData();
    const fn = [];
    for (let i = 0; i < filesToUpload.length; i++) {
      fn.push(filesToUpload[i].id);
      formData.append(filesToUpload[i].id, filesToUpload[i].file, filesToUpload[i].file.name);
    }
    formData.append('body', JSON.stringify({ clients: clients, fileName: fn }));
    let headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this._http
      .put(endpoint, formData, { headers: headers })
  }
  
  putSomosInicio(inicio, id) {
    let body = JSON.stringify(inicio);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(this.url + 'pages/somos/inicio/' + id, body, { headers: headers });
  }
  putSomosInicioF(fileToUpload: File, inicio, id): Observable<Object> {
    const endpoint = this.url + 'pages/somos/inicioF/' + id;
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    formData.append('body', JSON.stringify({ inicio: inicio }));
    let headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this._http
      .put(endpoint, formData, { headers: headers })
  }
  putVersion(version, id) {
    let body = JSON.stringify(version);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(this.url + 'pages/somos/version/' + id, body, { headers: headers });
  }

  
  putInteresInicio(inicio, id) {
    let body = JSON.stringify(inicio);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(this.url + 'pages/interes/inicio/' + id, body, { headers: headers });
  }
  putInteresInicioF(fileToUpload: File, inicio, id): Observable<Object> {
    const endpoint = this.url + 'pages/interes/inicioF/' + id;
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    formData.append('body', JSON.stringify({ inicio: inicio }));
    let headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this._http
      .put(endpoint, formData, { headers: headers })
  }
  putInteresList(list, id) {
    let body = JSON.stringify(list);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(this.url + 'pages/interes/list/' + id, body, { headers: headers });
  }
  putInteresListF(filesToUpload: fileObj[], list, id): Observable<Object> {
    const endpoint = this.url + 'pages/home/listF/' + id;
    const formData: FormData = new FormData();
    const fn = [];
    for (let i = 0; i < filesToUpload.length; i++) {
      fn.push(filesToUpload[i].id);
      formData.append(filesToUpload[i].id, filesToUpload[i].file, filesToUpload[i].file.name);
    }
    formData.append('body', JSON.stringify({ list: list, fileName: fn }));
    let headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this._http
      .put(endpoint, formData, { headers: headers })
  }

  getCatEgresos() {
    return this._http.get(this.url + 'categoriaEgresos');
  }
  getEvents() {
    return this._http.get(this.url + 'events');
  }
  getTalleres() {
    return this._http.get(this.url + 'workshop');
  }
  getConsultorias() {
    return this._http.get(this.url + 'consults');
  }
  getEvent(id) {
    return this._http.get(this.url + 'events/' + id);
  }

  addProgram(program) {
    let body = JSON.stringify(program);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(this.url + 'programs/add', body, { headers: headers });
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
    return this._http.post(this.url + 'modules/add', body, { headers: headers });
  }
  getModulos(idProgram) {
    console.log(idProgram)
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.get(this.url + 'modules/lista/' + idProgram, { headers: headers });
  }
  getEventModuls(eventId) {
    console.log(eventId)
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.get(this.url + 'modules/eventoModuls/' + eventId, { headers: headers });
  }
  getModulo(_id) {
    return this._http.get(this.url + 'modules/' + _id);
  }

  addEvent(event) {
    let body = JSON.stringify(event);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(this.url + 'events', body, { headers: headers });
  }
  addPerson(person) {
    let body = JSON.stringify(person);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(this.url + 'persons', body, { headers: headers });
  }


  getPersons() {
    return this._http.get(this.url + 'persons');
  }

  getFacilitadores() {
    return this._http.get(this.url + 'facilitators');
  }
  getFacilitador(id) {
    return this._http.get(this.url + 'facilitators/' + id);
  }
  addFacilitador(user) {
    let body = JSON.stringify(user);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(this.url + 'facilitators/register', body, { headers: headers });
  }
  updateFacilitador(facilitador_object) {
    console.log(facilitador_object);
    let body = JSON.stringify(facilitador_object);
    var idfacilitador = facilitador_object._id;
    // console.log(body);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(this.url + 'facilitators/update/' + idfacilitador, body, { headers: headers });
  }


  getRole(id) {
    return this._http.get(this.url + 'users/rolName/' + id);
  }
  updateUser(user_object) {
    console.log(user_object);
    let body = JSON.stringify(user_object);
    var idUser = user_object._id;
    //console.log(body);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(this.url + 'users/' + idUser, body, { headers: headers });
  }
  updateProgram(program_object) {
    //   console.log(program_object, 'test');
    let body = JSON.stringify(program_object);
    var idProgram = program_object._id;
    // console.log(body);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(this.url + 'programs/edit/' + idProgram, body, { headers: headers });
  }
  updateModulo(modulo_object) {
    console.log(modulo_object);
    let body = JSON.stringify(modulo_object);
    var idModulo = modulo_object._id;
    // console.log(body);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put(this.url + 'modules/edit/' + idModulo, body, { headers: headers });
  }
  getSucursales() {
    return this._http.get(this.url + 'offices');
  }
  getSucursal(id) {

    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.get(this.url + 'offices/' + id, { headers: headers });
  }
  getRoles() {
    return this._http.get(this.url + 'roles');
  }




  // postFile(fileToUpload: File): Observable<boolean> {
  //   const endpoint = this.url + 'persons/upload';
  //   // const endpoint = this.url + 'importFromExcel/upload';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   let headers = new HttpHeaders();
  //   /** In Angular 5, including the header Content-Type can invalidate your request */
  //   headers.append('Content-Type', 'multipart/form-data');
  //   headers.append('Accept', 'application/json');
  //   // let options = new RequestOptions({ headers: headers });
  //   return this._http
  //     .post(endpoint, formData, { headers: headers })

  //   // .catch((e) => Observable.throw(e))
  //   // .subscribe();
  // }

  getModulars(eventId) {
    console.log(eventId)
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.get(this.url + 'events/getModulars/' + eventId, { headers: headers });
  }

  addNewTaller(taller) {
    let body = JSON.stringify(taller);
    console.log(body);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(this.url + 'events/addNewTaller/', body, { headers: headers });
  }

  // getEventTallerInscriptions(event){
  //   let body = JSON.stringify(event);	
  //   console.log(body);
  //   var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');		
  //   return this._http.post(this.url + 'events/getEventTallerInscriptions/', body, { headers: headers });		



  // }

  getEventTallerInscriptions(id) {
    return this._http.get(this.url + 'events/getEventTallerInscriptions/' + id);
  }



}
export interface fileObj {

  id: string,
  file: File,
}

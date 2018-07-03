import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { GLOBAL, Roles, Identity } from './global';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class UserService {
  public url: string;

  constructor(
    private _router: Router,
    // protected localStorage: AsyncLocalStorage,
    protected localStorage: LocalStorage,
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }
  register() {
    return "texto desde el servicio usuario";

  }
  //metodo para autenticar el usuario
  signup(user_to_login, gettoken = null) {
    if (gettoken != null)//sacamos el token y preguntamos
    {
      user_to_login.gettoken = gettoken;
    }
    let params = JSON.stringify(user_to_login);
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this._http.post(this.url + 'login', params, { headers: headers })
  }
  getNombre(password) {
    return this._http.get(this.url + 'users/password' + password)
  }
  getPassword(name) {
    return this._http.get(this.url + 'users/name' + name)
  }
  getUser(_id) {
    return this._http.get(this.url + 'users/' + _id)
  }
  signin(user_to_login) {

    let body = JSON.stringify(user_to_login);//get interface
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this._http.post(this.url + 'users/login', body, { headers: headers })

  }
  initApp() {
    this._http.get(this.url + 'users/roles')



    this.localStorage.getItem('Identity').subscribe((data) => {

    });
  }
}
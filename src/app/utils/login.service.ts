import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
      return this.http.post(environment.serverAdress + 'users/login', {
        email: email,
        password: password
      }, {withCredentials: true, responseType: 'text'})
  }

  logout(){
    return this.http.post(environment.serverAdress + 'users/logout', {}, {withCredentials: true, responseType: 'text'})
  }

  register(email:string, username: string, password: string){
    return this.http.post(environment.serverAdress + 'users/'+username, {
      email: email,
      password: password
    }, {withCredentials: true, responseType: "text"})
  }

  getUser(email: string){
    return this.http.get(environment.serverAdress +"users/"+ email, {withCredentials: true})
  }
}

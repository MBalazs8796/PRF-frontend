import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  test(){
    console.log("test");
  }

  testCall(){
    return this.http.get(environment.serverAdress);
  }
}

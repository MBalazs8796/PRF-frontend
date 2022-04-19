import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemManagerService {

  constructor(private http: HttpClient) { }

  getAllItems(){
    return this.http.get(environment.serverAdress + 'stock', {withCredentials: true});
  }

  purchaseItem(name: string, amount: number){
    return this.http.post(environment.serverAdress + 'stock/purchase/' + name, {amount: amount}, {withCredentials: true, responseType: "text"});
  }
}

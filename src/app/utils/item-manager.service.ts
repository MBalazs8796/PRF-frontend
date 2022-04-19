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

  deleteItem(name: string){
    return this.http.delete(environment.serverAdress + 'stock/' + name, {withCredentials: true, responseType: "text"});
  }

  updateItem(name: string, amount: number, cost: number){
    return this.http.put(environment.serverAdress + 'stock/' + name, {amount: amount, cost: cost}, {withCredentials: true, responseType: "text"});
  }

  addItem(name: string, amount: number, cost: number){
    return this.http.post(environment.serverAdress + 'stock/' + name, {amount: amount, cost: cost}, {withCredentials: true, responseType: "text"});
  }
}

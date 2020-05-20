import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {GlobalService} from "../global.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://speckalm.htl-perg.ac.at/r";
  private data =[];
  constructor(private http: HttpClient, private globalService: GlobalService) {
  }
  setData(id,data){
    this.data[id] = data;
  }
  getData(id){
    return this.data[id];
  }

  searchCategories(title,id): Observable<any>{
    if(this.globalService.getToken()!=null){
      return this.http.get(`${this.url}/api/${encodeURI(title)}/shop/${id}?token=${this.globalService.getToken()}`)
    }
    else{
      console.log("token null")
    }
  }
  searchProducts(title, id): Observable<any>{
    return this.http.get(`${this.url}/api/categories/${encodeURI(id)}/${encodeURI(title)}?token=${this.globalService.getToken()}`)
  }
  async addToCart(userId, productId, quantity) {
    let postData = new FormData();
    postData.append('product', productId);
    postData.append('quantity', quantity);
    const response = await this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users/${userId}/shoppingCart?token=${this.globalService.getToken()}`, postData).toPromise()
    console.log(response['error'])
    return await this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users/${userId}/shoppingCart?token=${this.globalService.getToken()}`, postData).toPromise();
  }
}
  

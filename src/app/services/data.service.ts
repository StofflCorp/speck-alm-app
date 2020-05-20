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
  token = this.globalService.getToken()
  private data =[];
  constructor(private http: HttpClient, private globalService: GlobalService) {
    this.token = this.globalService.getToken()
  }
  setData(id,data){
    this.data[id] = data;
  }
  getData(id){
    return this.data[id];
  }

  searchCategories(title,id): Observable<any>{
    if(this.token!=null){
      return this.http.get(`${this.url}/api/${encodeURI(title)}/shop/${id}?token=${this.token}`)
    }
    else{
      console.log("token null")
    }
  }
  searchProducts(title, id): Observable<any>{
    return this.http.get(`${this.url}/api/categories/${encodeURI(id)}/${encodeURI(title)}?token=${this.token}`)
  }
  async addToCart(userId, productId, quantity) {
    let postData = new FormData();
    postData.append('product', productId);
    postData.append('quantity', quantity);
    const response = await this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users/${userId}/shoppingCart?token=${this.token}`, postData).toPromise()
    console.log(response['error'])
    return await this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users/${userId}/shoppingCart?token=${this.token}`, postData).toPromise();
  }
}
  

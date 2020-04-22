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
  token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJzdWIiOjMsImlhdCI6MTU4NzU0Mjk2MSwiZXhwIjoxNTg3NTQ2NTYxfQ.a3tT93z9zlUK1DVPiNTqHPAKPFip4d6ApgjIAAEfB0U"
  private data =[];
  constructor(private http: HttpClient, private globalService: GlobalService) { }
  setData(id,data){
    this.data[id] = data;
  }
  getData(id){
    return this.data[id];
  }
  searchCategories(title): Observable<any>{
    /*if(this.globalService.getId() != null){
      return this.http.get(`${this.url}/api/${encodeURI(title)}?token=${this.globalService.getToken()}`)
    }*/
    return this.http.get(`${this.url}/api/${encodeURI(title)}?token=${this.token}`)
  }
  searchProducts(title, id): Observable<any>{
    /*if(this.globalService.getId() != null){
      return this.http.get(`${this.url}/api/categories/${encodeURI(id)}/${encodeURI(title)}?token=${this.globalService.getToken()}`)
    }*/
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
  

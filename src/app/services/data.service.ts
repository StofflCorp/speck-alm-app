import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://speckalm.htl-perg.ac.at/r";
  apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJzdWIiOjMsImlhdCI6MTU4NTczMzA1NiwiZXhwIjoxNTg1NzM2NjU2fQ.d8q42orJhYLYtjkDoFSGuaAlJfrwrKGafaDli4vO5ug";

  private data =[];
  constructor(private http: HttpClient) { }
  setData(id,data){
    this.data[id] = data;
  }
  getData(id){
    return this.data[id];
  }
  searchCategories(title): Observable<any>{
    return this.http.get(`${this.url}/api/${encodeURI(title)}?token=${this.apiKey}`)
  }
  searchProducts(title, id): Observable<any>{
    return this.http.get(`${this.url}/api/categories/${encodeURI(id)}/${encodeURI(title)}?token=${this.apiKey}`)
  }
}
  

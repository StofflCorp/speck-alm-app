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
  token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJzdWIiOjMsImlhdCI6MTU4NzUzODc1MSwiZXhwIjoxNTg3NTQyMzUxfQ.KL559ziozHecA3q1Cqb11JX6GRP4eLEIH-6AB7kkcS0"
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
}
  

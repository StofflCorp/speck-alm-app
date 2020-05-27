import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  //public token: string;
  public token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJzdWIiOjEsImlhdCI6MTU5MDU2MjI5MCwiZXhwIjoxNTkwNjQ4NjkwfQ.RNqiuB17zm9XwVzR0TAcGvDy37fsnQagp7UBkvO2eHk"
  public id = 1;

  constructor() { }

  setToken(token: string) {
    this.token = token;
  }
  getToken(): string {
    return this.token;
  }

  setId(id: number) {
    this.id = id;
  }
  getId(): number {
    return this.id;
  }
}

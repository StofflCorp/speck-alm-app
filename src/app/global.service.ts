import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // public token: string;
  // tslint:disable-next-line:max-line-length
  public token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJzdWIiOjMsImlhdCI6MTYwMjE1NTI5OCwiZXhwIjoxNjAyMjQxNjk4fQ.LO4FrK0zwM9Nj4sRMq7O6pD6P2ANK_qXggticxcYz3k';
  public id = 3;

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

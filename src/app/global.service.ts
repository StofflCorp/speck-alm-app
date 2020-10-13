import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // public token: string;
  public token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJzdWIiOjEsImlhdCI6MTYwMjE1NDkxOCwiZXhwIjoxNjAyMjQxMzE4fQ.XJ3MkNCWJMcBhXRYxUM-tmtwu47oX8EC8hxb2t2d2KQ';
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
    return this.id
  };
}

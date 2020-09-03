import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // public token: string;
  // tslint:disable-next-line:max-line-length
  public token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJzdWIiOjEsImlhdCI6MTU5OTExNDc2OSwiZXhwIjoxNTk5MjAxMTY5fQ.-eKTra_AJr7k9VAeOaSj3TPemf1ncZ_ZzmrRiDpJU4w';
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

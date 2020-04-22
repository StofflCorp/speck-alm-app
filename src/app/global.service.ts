import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public token: string;
  public id: number;

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
    //return this.id;
    return 3;
  }
}

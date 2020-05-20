import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  //public token: string;
  public token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJzdWIiOjcsImlhdCI6MTU4OTk1Mjg3OSwiZXhwIjoxNTkwMDM5Mjc5fQ.EPgEI-ez1cV-UCxIw8KIC_QFyXchKCXu6nDvcrflhJE"
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

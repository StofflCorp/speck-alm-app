import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public token: string;
  //public token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJzdWIiOjMsImlhdCI6MTU4ODc0OTkyOSwiZXhwIjoxNTg4NzUzNTI5fQ.X3BUO8JVOwNrNikwR-pwF7pB9Sr4l8gpFBo2KAk9DiE"
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
    //this.id = 3;
  }
  getId(): number {
    return this.id;
    //return 3;
  }
}

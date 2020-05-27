import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // public token: string;
  public token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJzdWIiOjEsImlhdCI6MTU5MDU2NDk0OSwiZXhwIjoxNTkwNjUxMzQ5fQ.Fajc_loJ71hYflgD0RRKocAk3EeTuGrYtCLzpAhNyjk';
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

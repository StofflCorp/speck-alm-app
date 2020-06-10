import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // public token: string;
  public token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJzdWIiOjcsImlhdCI6MTU5MTc3MjI0NCwiZXhwIjoxNTkxODU4NjQ0fQ.3BNUdPxCeOOpZmcGuEuS4jZi7iuU0lZ4V4UaWJ-kQI0';
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

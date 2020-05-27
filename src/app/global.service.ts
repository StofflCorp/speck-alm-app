import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  //public token: string;
  public token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJzdWIiOjEsImlhdCI6MTU5MDQ3NDU0NiwiZXhwIjoxNTkwNTYwOTQ2fQ.g2SViC9-__JLuPQqskHcqBffNl7qT8dquHLLziKo2Fk"
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

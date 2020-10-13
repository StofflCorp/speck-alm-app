import { Injectable } from '@angular/core';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // public token: string;
  private token = null;
  private id = null;

  constructor(private storage: StorageService) {}

  setToken(token: string) {
    this.token = token;
    this.storage.store('token', token);
  }
  getToken(): string {
    if (this.token == null) {
      this.token = this.storage.retrieve('token');
    }
    return this.token;
  }

  setId(id: number) {
    this.id = id;
    this.storage.store('id', id);
  }
  getId(): number {
    if (this.id == null) {
      this.id = this.storage.retrieve('id');
    }
    return this.id;
  }
}

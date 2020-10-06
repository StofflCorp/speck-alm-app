import { Injectable } from '@angular/core';
import * as SecureLS from 'secure-ls';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private ls = new SecureLS({encodingType: 'aes'});

    constructor() {}

    store(key: string, value: any): void {
        this.ls.set(key, value);
    }

    retrieve(key: string): any {
        return this.ls.get(key);
    }

    clear(): void {
        this.ls.removeAll();
    }

}

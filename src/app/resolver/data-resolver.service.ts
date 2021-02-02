import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot) {
    return +route.paramMap.get('id');
  }
}

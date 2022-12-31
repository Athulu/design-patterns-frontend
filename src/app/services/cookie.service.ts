import {Injectable} from '@angular/core';
import {Md5} from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  cookie : any;
  constructor() {
    const token = new Md5();
    token.appendStr(new Date().toString());
    this.cookie = token.end();
  }
}

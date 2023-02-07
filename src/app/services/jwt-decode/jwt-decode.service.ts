import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtDecodeService {

  constructor() { }

  helper = new JwtHelperService();

  decodeToken(token: string) {

    return this.helper.decodeToken(token);
  }
}

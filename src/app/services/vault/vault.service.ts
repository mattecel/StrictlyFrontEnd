import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'src/app/classes/classes';

@Injectable({
  providedIn: 'root'
})
export class VaultService {

  private vaultURL = 'http://ec2-3-87-255-246.compute-1.amazonaws.com:8080/StrictlyProToDo-0.0.1-SNAPSHOT/strictly/vault/1'

  constructor(private http: HttpClient) { }

  // get user
  getUser(): Observable<User> {
    return this.http.get<User>(this.vaultURL);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ideia } from './ideia';

@Injectable({
  providedIn: 'root'
})
export class IdeiaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  //path: string = 'http://127.0.0.1:8080/ideia';
  path: string = 'https://plugue.herokuapp.com/ideia';

  //Headers
  httpOptions = { headers: new HttpHeaders({ "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
    "Content-Type": "application/json" })};

  salvaIdeia(ideia: Ideia): Observable<Ideia> {
    return this.httpClient.post<Ideia>(this.path, JSON.stringify(ideia), this.httpOptions);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projeto } from './projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  path: string = 'http://127.0.0.1:8080/projeto';
  //path: string = 'https://plugue.herokuapp.com/projeto';
  result!: Array<Projeto>

  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
      "Content-Type": "application/json"
    })
  };

  listarProjetos() {
    const headers = this.httpOptions.headers;
    return this.httpClient.get(`${this.path}`, { headers }).toPromise();
  }
}

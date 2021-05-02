import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  path: string = 'http://127.0.0.1:8080/ideia';
  //path: string = 'https://plugue.herokuapp.com/ideia';
  result!: Array<Ideia>

  //Headers
  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
      "Content-Type": "application/json"
    })
  };

  salvaIdeia(ideia: Ideia): Observable<Ideia> {
    return this.httpClient.post<Ideia>(this.path, JSON.stringify(ideia), this.httpOptions);
  }

  //Lista todas as ideias
  listarIdeias() {
    return this.httpClient.get<Array<Ideia>>(this.path);
  }

  //Busca ideias por parâmetros
  buscarIdeias(titulo: string, area: string) {
    const headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
      "Content-Type": "application/json"
    });

    let params = new HttpParams();
    if (titulo) params.set('titulo', titulo);
    if (area) params.set('area', area);


    return this.httpClient.get(`${this.path}`, { headers, params }).toPromise().then(ideias => {
      const objectArray = Object.entries(ideias);
      objectArray.forEach(([key, value]) => {
        this.result.push(value);
      })
      console.log(this.result)
    });
  }

  // Interessar por ideia
  applyIdea() {
    const headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
      "Content-Type": "application/json"
    });

    this.httpClient.put(`${this.path}/${"teste"}/ideia/${"38"}`, {}, { headers }).subscribe(
      val => {
        console.log("PUT call successful value returned in body", val);
      },
      response => {
        console.log("PUT call in error", response);
      },
      () => {
        console.log("The PUT observable is now completed.");
      }
    );
  }
}

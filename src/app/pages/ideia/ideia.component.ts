import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ideia',
  templateUrl: './ideia.component.html',
  styleUrls: ['./ideia.component.css']
})
export class IdeiaComponent implements OnInit {
  id: string
  readonly apiURL : string;
  titulo : string;
  descricao: string;
  areaInteresse: string;
  interessados: Array<any>;

  constructor(route: ActivatedRoute, private http : HttpClient) { 
    this.id = route.snapshot.params.ideiaId;
    this.apiURL = 'https://plugue.herokuapp.com/';
    this.titulo = '';
    this.descricao = '';
    this.areaInteresse = '';
    this.interessados = [];
  }

  ngOnInit(): void {
    this.getIdeia();
  }

  getIdeia() {
    const headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
      "Content-Type": "application/json"
    });

    return this.http.get(`${this.apiURL}ideia/${this.id}`, { headers }).toPromise().then(ideia => {
      const objectArray = Object.entries(ideia);
      objectArray.forEach(([ key, value ]) => {
        console.log(key, value)
        if(key === 'titulo') this.titulo = value;
        if(key === 'areaInteresse') this.areaInteresse = value;
        if(key === 'descricao') this.descricao = value;
        if(key === 'alunos' || key === 'professores') this.interessados = value;
      })
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repositorio-de-projetos',
  templateUrl: './repositorio-de-projetos.component.html',
  styleUrls: ['./repositorio-de-projetos.component.css']
})
export class RepositorioDeProjetosComponent implements OnInit {
  readonly apiURL : string;
  result : Array<any>;
  idUsuario: any = '';

  constructor(
    private http : HttpClient,
    private route_rec: ActivatedRoute
    ) {
    this.idUsuario = this.route_rec.snapshot.paramMap.get('id');
    this.apiURL = `https://plugue.herokuapp.com`;
    this.result = [];
    
  }

  ngOnInit(): void {    
    this.listProjetos();
    this.listInteresse();
  }

  listProjetos() {
    const headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
      "Content-Type": "application/json"
    });

    return this.http.get(`${this.apiURL}/projeto?id=${this.idUsuario}`, { headers }).toPromise().then(projetos => {
      const objectArray = Object.entries(projetos);
      objectArray.forEach(([ key, value ]) => {
        this.result.push(value);
      })
      console.log(this.result)
    });
  }

  listInteresse() {
    const headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
      "Content-Type": "application/json"
    });

    return this.http.get(`${this.apiURL}/professor/${this.idUsuario}/ideias`, { headers }).toPromise().then(projetos => {
      const objectArray = Object.entries(projetos);
      objectArray.forEach(([ key, value ]) => {
        this.result.push(value);
      })
      console.log(this.result)
    });
  }
}

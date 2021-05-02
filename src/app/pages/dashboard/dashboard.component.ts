import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../assets/stylesheets/dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  readonly apiURL : string;
  result : Array<any>;

  constructor(
    private http : HttpClient,
    private route: ActivatedRoute
    ) {
    this.apiURL = 'https://plugue.herokuapp.com/';
    this.result = [];
  }

  ngOnInit(): void {
    this.listIdeas();
    const idUsuario = this.route.snapshot.paramMap.get('id');
    const tipoUsuario = this.route.snapshot.paramMap.get('tipoUsuario');
    console.log(idUsuario);
  }

  listIdeas() {
    const headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
      "Content-Type": "application/json"
    });

    return this.http.get(`${this.apiURL}ideia`, { headers }).toPromise().then(ideias => {
      const objectArray = Object.entries(ideias);
      objectArray.forEach(([ key, value ]) => {
        this.result.push(value);
      })
      //console.log(this.result)
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../assets/stylesheets/dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  readonly apiURL : string;
  result : Array<any>;

  constructor(private http : HttpClient) {
    this.apiURL = 'https://plugue.herokuapp.com/';
    this.result = [];
  }

  ngOnInit(): void {
    this.listIdeas();
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
      console.log(this.result)
    });
  }

}

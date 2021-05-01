import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/shared/professor/professor.service';
import { AlunoService } from 'src/app/shared/aluno/aluno.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  readonly apiURL : string;
  formulario = new FormGroup({
    email: new FormControl(''),
    senha : new FormControl(''),
  });
  
  constructor(private http : HttpClient) {
    this.apiURL = 'https://plugue.herokuapp.com/';
  }

  ngOnInit(): void {
  }

  login() {
    const headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
      "Content-Type": "application/json"
    });

    const params = new HttpParams()
      .set('login', this.formulario.get("email")?.value)
      .set('senha', this.formulario.get("senha")?.value)

    return this.http.get(`${this.apiURL}usuario`, { headers, params }).toPromise().then(() => {
      console.log("usuário logado")
    }).catch((error) => {
      console.log(error)
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Ideia } from 'src/app/shared/ideia/ideia';
import { IdeiaService } from 'src/app/shared/ideia/ideia.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../assets/stylesheets/dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //readonly apiURL : string;
  result!: Array<Ideia>;

  constructor(
    private http : HttpClient,
    private route: ActivatedRoute,
    private ideiaService: IdeiaService
    ) {
  }

  ngOnInit(): void {
    const idUsuario = this.route.snapshot.paramMap.get('id');
    const tipoUsuario = this.route.snapshot.paramMap.get('tipoUsuario');
    this.listaIdeias();
    this.result = [];
  }

  listaIdeias() {
    this.ideiaService.listarIdeias().subscribe(ideias => {
      ideias.forEach(i => {
        this.result.push(i)
      });
    });
  }

}

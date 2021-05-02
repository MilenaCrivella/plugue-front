import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Ideia } from 'src/app/shared/ideia/ideia';
import { IdeiaService } from 'src/app/shared/ideia/ideia.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../assets/stylesheets/dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  result!: Array<Ideia>;
  formularioBusca = new FormGroup({
    titulo: new FormControl(''),
    criador: new FormControl(''),
    area: new FormControl('')
  })

  constructor(
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

  busca() {
    this.result = [];
    this.ideiaService.buscarIdeias(this.formularioBusca.get('titulo')?.value,
      this.formularioBusca.get('area')?.value).then(ideias => {
        const objectArray = Object.entries(ideias);
        objectArray.forEach(([key, value]) => {
          this.result.push(value);
        })
        console.log(this.result)
      });
  }

}

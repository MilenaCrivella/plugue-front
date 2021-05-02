import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ideia } from 'src/app/shared/ideia/ideia';
import { IdeiaService } from 'src/app/shared/ideia/ideia.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Projeto } from 'src/app/shared/projeto/projeto';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../assets/stylesheets/dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ideias!: Array<Ideia>;
  projetos!: Array<Projeto>;
  tipoUsuario: any = '';
  idUsuario: any = '';
  isAluno: boolean = false;
  isProfessor: boolean = false;

  formularioBusca = new FormGroup({
    titulo: new FormControl(''),
    criador: new FormControl(''),
    area: new FormControl('')
  })

  constructor(
    private route: ActivatedRoute,
    private ideiaService: IdeiaService
  ) { }

  ngOnInit(): void {
    this.idUsuario = this.route.snapshot.paramMap.get('id');
    this.tipoUsuario = this.route.snapshot.paramMap.get('tipoUsuario');
    this.checkUserType();
    this.ideias = [];
    this.projetos = [];
  }

  checkUserType() {
    if (this.tipoUsuario == 'aluno') {
      this.isAluno = true;
      this.listaProjetos();
    } else if (this.tipoUsuario == 'professor') {
      this.isProfessor = true;
      this.listaIdeias();
    }
  }

  listaIdeias() {
    this.ideiaService.listarIdeias().subscribe(ideias => {
      ideias.forEach(i => {
        this.ideias.push(i)
      });
    });
  }

  listaProjetos() {

  }

  busca() {
    this.ideias = [];
    this.ideiaService.buscarIdeias(this.formularioBusca.get('titulo')?.value,
      this.formularioBusca.get('area')?.value).then(ideias => {
        const objectArray = Object.entries(ideias);
        objectArray.forEach(([key, value]) => {
          this.ideias.push(value);
        })
        console.log(this.ideias)
      });
  }

}

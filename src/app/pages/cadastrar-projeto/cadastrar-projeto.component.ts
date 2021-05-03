import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Aluno } from 'src/app/shared/aluno/aluno';
import { Professor } from 'src/app/shared/professor/professor';
import { Projeto } from 'src/app/shared/projeto/projeto';
import { ProjetoService } from 'src/app/shared/projeto/projeto.service';

@Component({
  selector: 'app-cadastrar-projeto',
  templateUrl: './cadastrar-projeto.component.html',
  styleUrls: ['./cadastrar-projeto.component.css']
})
export class CadastrarProjetoComponent implements OnInit {
  
  projeto: Projeto = new Projeto();
  professor: Professor = new Professor();

  formulario = new FormGroup({
    titulo: new FormControl(''),
    areaInteresse: new FormControl(''),
    descricao: new FormControl(''),
  });

  constructor(private projetoService: ProjetoService) {
  }

  ngOnInit(): void {
  }

  formProjeto() {
    this.professor.id = 36
    this.projeto.titulo = this.formulario.get("titulo")?.value;
    this.projeto.areaInteresse = this.formulario.get("areaInteresse")?.value;
    this.projeto.descricao = this.formulario.get("descricao")?.value;
    this.projeto.professor = this.professor;
    this.projetoService.salvaProjeto(this.projeto).subscribe(projeto => {
      console.log(projeto)
    })
  }

}

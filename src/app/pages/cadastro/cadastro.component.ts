import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Aluno } from 'src/app/shared/aluno/aluno';
import { Professor } from 'src/app/shared/professor/professor';
import { ProfessorService } from 'src/app/shared/professor/professor.service';
import { AlunoService } from 'src/app/shared/aluno/aluno.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  professor: Professor = new Professor();
  returnProf: Professor = new Professor();
  aluno: Aluno = new Aluno();
  returnAluno: Aluno = new Aluno();
  isAluno: boolean = false;
  isProfessor: boolean = true;

  formulario = new FormGroup({
    nome: new FormControl(''),
    paginaPessoal: new FormControl(''),
    curso: new FormControl(''),
    email: new FormControl(''),
    senha : new FormControl(''),
  });

  constructor(
    private professorService: ProfessorService,
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {
  }

  changeUserType() {
    this.isAluno = !this.isAluno;
    this.isProfessor = !this.isProfessor;
    console.log(this.isAluno, this.isProfessor)
  }

  onSubmit() {
    this.isProfessor == true ? this.formProfessor() : this.formAluno();
  }

  formAluno() {
    this.aluno.nome = this.formulario.get("nome")?.value;
    this.aluno.curso = this.formulario.get("curso")?.value;
    this.aluno.contato = this.formulario.get("email")?.value;
    this.aluno.senha = this.formulario.get("senha")?.value;
    this.alunoService.salvaAluno(this.aluno).subscribe(al => {
      this.returnAluno = new Aluno(al);
      console.log(this.returnAluno);
    })
  }

  formProfessor() {
    this.professor.nome = this.formulario.get('nome')?.value;
    this.professor.paginaPessoal = this.formulario.get("paginaPessoal")?.value;
    this.professor.contato = this.formulario.get("email")?.value;
    this.professor.senha = this.formulario.get("senha")?.value;

    this.professorService.salvaProfessor(this.professor).subscribe(prof => {
      this.returnProf = new Professor(prof);
      console.log(this.returnProf);
    });
  }

}

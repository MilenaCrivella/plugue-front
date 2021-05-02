import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Aluno } from 'src/app/shared/aluno/aluno';
import { Professor } from 'src/app/shared/professor/professor';
import { Ideia } from 'src/app/shared/ideia/ideia';
import { IdeiaService } from 'src/app/shared/ideia/ideia.service';

@Component({
  selector: 'app-cadastrar-ideia',
  templateUrl: './cadastrar-ideia.component.html',
  styleUrls: ['./cadastrar-ideia.component.css']
})

export class CadastrarIdeiaComponent implements OnInit {

  ideia: Ideia = new Ideia();
  aluno: Aluno = new Aluno();
  professor: Professor = new Professor()
  returnIdeia: Ideia = new Ideia();


  

  formulario = new FormGroup({
    tituloIdeia: new FormControl(''),
    areaInteresse: new FormControl(''),
    descricaoIdeia: new FormControl(''),
  });

  constructor(
    private ideiaService: IdeiaService
  ) { }

  ngOnInit(): void {}

  onSubmit() {
    this.formIdeia();
  }

  formIdeia() {

    this.aluno.id = 37
    this.ideia.titulo = this.formulario.get("tituloIdeia")?.value;
    this.ideia.areaInteresse = this.formulario.get("areaInteresse")?.value;
    this.ideia.descricao = this.formulario.get("descricaoIdeia")?.value;
    this.ideia.aluno = this.aluno
    console.log(this.ideia)
    console.log(this.aluno)
    this.ideiaService.salvaIdeia(this.ideia).subscribe(ideia => {
      this.returnIdeia = new Ideia(ideia);
      console.log(this.returnIdeia);
    });
  }

}

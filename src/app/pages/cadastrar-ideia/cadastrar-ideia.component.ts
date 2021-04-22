import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ideia } from 'src/app/shared/ideia/ideia';
import { IdeiaService } from 'src/app/shared/ideia/ideia.service';

@Component({
  selector: 'app-cadastrar-ideia',
  templateUrl: './cadastrar-ideia.component.html',
  styleUrls: ['./cadastrar-ideia.component.css']
})

export class CadastrarIdeiaComponent implements OnInit {

  ideia: Ideia = new Ideia();
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
    this.ideia.titulo = this.formulario.get("tituloIdeia")?.value;
    this.ideia.areaInteresse = this.formulario.get("areaInteresse")?.value;
    this.ideia.descricao = this.formulario.get("descricaoIdeia")?.value;
    this.ideiaService.salvaIdeia(this.ideia).subscribe(al => {
      this.returnIdeia = new Ideia(al);
      console.log(this.returnIdeia);
    });
  }

}

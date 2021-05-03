import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario/usuario.service';
import { Usuario } from 'src/app/shared/usuario/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../assets/stylesheets/header.component.scss']
})
export class HeaderComponent implements OnInit {

  tipoUsuario: any = '';
  idUsuario: any = '';

  constructor(
    private usuarioService: UsuarioService,
    private route_rec: ActivatedRoute,
    private router_env: Router
  ) { }

  usuario!: Usuario;

  ngOnInit(): void {
    this.idUsuario = this.route_rec.snapshot.paramMap.get('id');
    this.tipoUsuario = this.route_rec.snapshot.paramMap.get('tipoUsuario');
  }

  repo(){
    if(this.tipoUsuario == 'aluno'){
      this.router_env.navigate(['/repositorio-de-ideias', { id: this.idUsuario}]);
    }
    else{
      this.router_env.navigate(['/repositorio-de-projetos', { id: this.idUsuario}]);
    }  
    console.log(this.idUsuario, this.tipoUsuario)    
  }

  dash(){
    if(this.tipoUsuario == 'aluno'){
      this.router_env.navigate(['/home', { id: this.idUsuario, tipoUsuario: this.tipoUsuario}]);
    }
    else{
      this.router_env.navigate(['/home', { id: this.idUsuario, tipoUsuario: this.tipoUsuario}]);
    } 
    console.log(this.idUsuario, this.tipoUsuario) 
  }

  

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarIdeiaComponent } from './pages/atualizar-ideia/atualizar-ideia.component';
import { CadastrarIdeiaComponent } from './pages/cadastrar-ideia/cadastrar-ideia.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IdeiaComponent } from './pages/ideia/ideia.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:"home", component: DashboardComponent},
  {path:"login", component: LoginComponent},
  {path:"cadastrar-ideia", component: CadastrarIdeiaComponent},
  {path:"atualizar-ideia", component: AtualizarIdeiaComponent},
  {path:"ideia", component: IdeiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

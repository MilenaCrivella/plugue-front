import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarIdeiaComponent } from './pages/cadastrar-ideia/cadastrar-ideia.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:"home", component: DashboardComponent},
  {path:"login", component: LoginComponent},
  {path:"cadastrar-ideia", component: CadastrarIdeiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

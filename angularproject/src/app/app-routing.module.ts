import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { SecaoComponent } from './secao/secao.component';
import { SecEditComponent } from './secao/secEdit/secEdit.component';
import { SecDetalhesComponent } from './secao/secDetalhes/secDetalhes.component';
import { SecCadComponent } from './secao/secCad/secCad.component';
import { SecExcluirComponent } from './secao/SecExcluir/SecExcluir.component';


const routes: Routes = [
  { path: 'secao', component: SecaoComponent},
  { path: 'secEditar/:id', component: SecEditComponent},
  { path: 'secExcluir', component: SecExcluirComponent},
  { path: 'secDetalhes/:id', component: SecDetalhesComponent},
  { path: 'secCadastro', component: SecCadComponent},
  { path: 'editar', component: SecaoComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: '', component: HomeComponent},
  { path: 'editar/:id', component: EditarComponent},
  { path: 'detalhes/:id', component: DetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

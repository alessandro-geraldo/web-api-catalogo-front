import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriaDetalheComponent } from './components/categoria-detalhe/categoria-detalhe.component';
import { CategoriaEditarComponent } from './components/categoria-editar/categoria-editar.component';
import { CategoriaNovaComponent } from './components/categoria-nova/categoria-nova.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, data: { title: 'Login'}},
  {path: 'logout', component: LogoutComponent, data: {title: 'Logout'}},
  {path: 'categorias', component: CategoriasComponent, data: {title: 'Categorias'}},
  {path: 'categoria-detalhe/:id', component: CategoriaDetalheComponent, data: {title: 'Detalhe da Categoria'}},
  {path: 'categoria-nova', component: CategoriaNovaComponent, data: {title: 'Adicionar Categoria'}},
  {path: 'categoria-editar/:id', component: CategoriaEditarComponent, data: {title: 'Editar a Categoria'}},
  {path: '', redirectTo: '/categorias', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

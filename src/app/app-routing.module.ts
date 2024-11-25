import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CreateClienteComponent } from './components/clientes/create-cliente/create-cliente.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CreateProdutoComponent } from './components/produtos/create-produto/create-produto.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/create', component: CreateClienteComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos/create', component: CreateProdutoComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' }, // Rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

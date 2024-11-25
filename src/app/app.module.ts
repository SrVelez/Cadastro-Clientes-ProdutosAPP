import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateClienteComponent } from './components/clientes/create-cliente/create-cliente.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UpdateClienteComponent } from './components/clientes/update-cliente/update-cliente.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateProdutoComponent } from './components/produtos/create-produto/create-produto.component';
import { UpdateProdutoComponent } from './components/produtos/update-produto/update-produto.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProdutosComponent,
    CreateClienteComponent,
    UpdateClienteComponent,
    CreateProdutoComponent,
    UpdateProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

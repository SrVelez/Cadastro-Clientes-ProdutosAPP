import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/Models/cliente';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.scss'],
})
export class CreateProdutoComponent implements AfterViewInit {
  produtoForm: FormGroup;
  clientes: Cliente[] = [];

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private clienteService: ClienteService,
    private router: Router
  ) {
    this.produtoForm = this.fb.group({
      projectName: ['', Validators.required],
      description: ['', Validators.required],
      startDate: [null],
      endDate: [''], // Adiciona a data atual
      clienteId: ['', Validators.required],
    });
  }
  onSubmit(): void {
    if (this.produtoForm.valid) {
      const produto = this.produtoForm.value;
      this.produtoService.PostCliente(produto).subscribe({
        next: () => this.router.navigate(['/produtos']), //this.toastr.success('Comentario adicionado', 'Sucesso'),
        error: (err) => console.log('triste'), //this.toastr.error(err.message),
      });
    }
  }
  buscarClientes(): void {
    this.clienteService.GetClientes().subscribe((cliente) => {
      this.clientes = cliente;
      console.log(cliente);

      // const dataFormatada = cliente;
      // dataFormatada.map((item) => {
      //   item.createdDate = new Date(item.createdDate!).toLocaleDateString('pt-BR');
      // })
    });
  }
  ngAfterViewInit(): void {
    this.buscarClientes();
  }
}

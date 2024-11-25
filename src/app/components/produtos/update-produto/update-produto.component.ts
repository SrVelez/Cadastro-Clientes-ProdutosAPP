import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/services/produto.service';
import { Cliente } from 'src/app/Models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.scss'],
})
export class UpdateProdutoComponent {
  produtoForm: FormGroup;
  clientes: Cliente[] = [];
  constructor(
    private produtoService: ProdutoService,
    private clienteService: ClienteService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.produtoForm = this.fb.group({
      id: [data.produto.id],
      projectName: [data.produto.projectName, Validators.required],
      description: [data.produto.description, Validators.required],
      startDate: [data.produto.startDate],
      endDate: [data.produto.endDate],
      clienteId: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.produtoForm.valid) {
      const updatedProduto = this.produtoForm.value;
      this.produtoService
        .UpdateProduto(updatedProduto.id, updatedProduto)
        .subscribe({
          next: () => {
            console.log('legal');
            this.dialogRef.close(true);
          },
          error: (err) => console.log('triste'),
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

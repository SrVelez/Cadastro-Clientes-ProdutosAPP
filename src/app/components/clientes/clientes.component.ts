import {
  Component,
  AfterViewInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { Cliente } from '../../Models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'cnpj',
    'email',
    'phone',
    'address',
    'createdDate',
    'actions',
  ];
  dataSource = new MatTableDataSource<Cliente>();
  clienteSelecionado: any;

  @ViewChild('confirmDialog') confirmDialog!: TemplateRef<any>;

  constructor(
    private clienteService: ClienteService,
    private dialog: MatDialog
  ) {}

  ngAfterViewInit(): void {
    this.buscarClientes();
  }

  buscarClientes(): void {
    this.clienteService.GetClientes().subscribe((cliente) => {
      this.dataSource.data = cliente;
    });
  }

  openEditDialog(cliente: Cliente): void {
    const dialogRef = this.dialog.open(UpdateClienteComponent, {
      width: '400px',
      data: { cliente },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.buscarClientes();
      }
    });
  }

  openConfirmDialog(cliente: Cliente): void {
    this.clienteSelecionado = cliente;
    const dialogRef = this.dialog.open(this.confirmDialog);
    dialogRef.afterClosed().subscribe((confirmado) => {
      if (confirmado) {
        this.excluirCliente(cliente.id);
      }
    });
  }

  excluirCliente(clienteId: number): void {
    this.clienteService.DeleteCliente(clienteId).subscribe({
      next: () => {
        console.log('excluido');
        this.buscarClientes();
      },
      error: (err) => console.log('Erro ao excluir cliente: ' + err.message),
    });
  }
}

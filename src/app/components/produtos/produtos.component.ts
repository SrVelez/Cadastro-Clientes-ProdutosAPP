import { Component, AfterViewInit, ViewChild,TemplateRef, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from '../../Models/produto';
import { ProdutoService } from '../../services/produto.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProdutoComponent } from './update-produto/update-produto.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'projectName',
    'description',
    'cliente',
    'startDate',
    'endDate',
    'actions',
  ];

  dataSource = new MatTableDataSource<Produto>();
  produtoSelecionado: any;

  @ViewChild('confirmDialog') confirmDialog!: TemplateRef<any>;

  constructor(private produtoService: ProdutoService, private dialog: MatDialog) {}


  ngAfterViewInit(): void {
    this.buscarProduto();
  }

  buscarProduto(): void {
    this.produtoService.GetProduto().subscribe((produto) => {
      this.dataSource.data = produto;
      console.log(produto);
    });
  }


  openEditDialog(produto: Produto): void {
    const dialogRef = this.dialog.open(UpdateProdutoComponent, {
      width: '400px',
      data: { produto },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.buscarProduto();
      }
    });
  }

  openConfirmDialog(produto: Produto): void {
    this.produtoSelecionado = produto;
    const dialogRef = this.dialog.open(this.confirmDialog);
    dialogRef.afterClosed().subscribe((confirmado) => {
      if (confirmado) {
        this.excluirProduto(produto.id);
      }
    });
  }

  excluirProduto(produtoId: number): void {
    this.produtoService.DeleteProduto(produtoId).subscribe({
      next: () => {
        console.log('excluido');
        this.buscarProduto();
      },
      error: (err) => console.log('Erro ao excluir cliente: ' + err.message),
    });
  }




}

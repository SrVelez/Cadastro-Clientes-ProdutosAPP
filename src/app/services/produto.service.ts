import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../Models/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private apiUrl = `${environment.ApiUrl}/Produto`;
  constructor(private http: HttpClient) {}

  GetProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  PostCliente(produto: Produto) {
    return this.http.post(this.apiUrl, produto);
  }

  UpdateProduto(id: number, produto: Produto) {
    return this.http.put(this.apiUrl + `/produto/${id}`, produto);
  }

  DeleteProduto(id: number) {
    return this.http.delete(this.apiUrl + `/produto/${id}`);
  }
}

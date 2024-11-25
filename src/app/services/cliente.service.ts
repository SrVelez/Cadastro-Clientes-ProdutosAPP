import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../Models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = `${environment.ApiUrl}/Cliente`;
  constructor(private http: HttpClient) {}

  GetClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  PostCliente(cliente: Cliente) {
    return this.http.post(this.apiUrl, cliente);
  }

  UpdateCliente(id: number, cliente: Cliente) {
    return this.http.put(this.apiUrl + `/cliente/${id}`, cliente);
  }

  DeleteCliente(id: number) {
    return this.http.delete(this.apiUrl + `/cliente/${id}`);
  }
}

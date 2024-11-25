import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.scss'],
})
export class CreateClienteComponent {
  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) {
    this.clienteForm = this.fb.group({
      name: ['', Validators.required],
      cnpj: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: [''],
      createdDate: [new Date()], // Adiciona a data atual
    });
  }

  onSubmit(): void {
    if (this.clienteForm.valid) {
      const cliente = this.clienteForm.value;
      this.clienteService.PostCliente(cliente).subscribe({
        next: () => this.router.navigate(['/clientes']), //this.toastr.success('Comentario adicionado', 'Sucesso'),
        error: (err) => console.log('triste'), //this.toastr.error(err.message),
      });
    }
  }
}

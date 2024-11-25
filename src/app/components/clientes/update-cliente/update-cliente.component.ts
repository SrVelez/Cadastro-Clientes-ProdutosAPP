import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.scss'],
})
export class UpdateClienteComponent {
  clienteForm: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.clienteForm = this.fb.group({
      id: [data.cliente.id],
      name: [data.cliente.name, Validators.required],
      cnpj: [data.cliente.cnpj, Validators.required],
      email: [data.cliente.email, [Validators.required, Validators.email]],
      phone: [data.cliente.phone],
      address: [data.cliente.address],
    });
  }

  onSubmit(): void {
    if (this.clienteForm.valid) {
      const updatedCliente = this.clienteForm.value;
      this.clienteService
        .UpdateCliente(updatedCliente.id, updatedCliente)
        .subscribe({
          next: () => {
            console.log('legal');
            this.dialogRef.close(true);
          },
          error: (err) => console.log('triste'),
        });
    }
  }
}

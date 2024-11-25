import { Cliente } from "./cliente";

export interface Produto {
  id: number;
  projectName: string;
  cliente:Cliente;
  clienteId: number;
  description: string;
  startDate: Date;
  endDate: Date;
}

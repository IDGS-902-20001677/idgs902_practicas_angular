import { Pizza } from './pizza.model';
import { Cliente } from './cliente.model';

export interface Pedido {
  cliente: Cliente;
  pizza: Pizza;
  pizzas: Pizza[];
  fecha: Date;
  total: number;
}

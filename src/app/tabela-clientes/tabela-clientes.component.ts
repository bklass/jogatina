import { Component, OnInit } from '@angular/core';
import { Cliente } from "app/cliente";
import { CrudClientesService } from "app/crud-clientes.service";

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.css']
})
export class TabelaClientesComponent implements OnInit {
  clientes:Cliente[]=[];

  constructor(private servico:CrudClientesService) { }

  ngOnInit() {
    this.clientes = this.servico.getClientes();
  }
  
  remover(cliente:Cliente){
    this.servico.removerCliente(cliente);
  }

}

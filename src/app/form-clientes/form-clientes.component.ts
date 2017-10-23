import { Component, OnInit } from '@angular/core';
import { CrudClientesService } from "app/crud-clientes.service";
import { Cliente } from "app/cliente";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})

export class FormClientesComponent implements OnInit {
  cliente:Cliente;
  codigo: number;

  constructor(private servico:CrudClientesService, private router:Router, private rota:ActivatedRoute) { }

  ngOnInit() {
    this.codigo = this.rota.snapshot.params['cod'];
    
    if(isNaN(this.codigo)){
      this.cliente = new Cliente();
    }
    
    else{
      this.cliente = Object.assign({},
        this.servico.getClientePorCodigo(this.codigo))
    }
  }
  
  salvarCliente(){
    if(isNaN(this.codigo)){
    this.servico.adicionarCliente(this.cliente);
    this.cliente = new Cliente();
  }
  else{
    this.servico.atualizaCliente(this.codigo, this.cliente);
  }
  this.router.navigate(['/listaCliente']);
  }
  
    voltar()    { 
      this.router.navigate(['/listaCliente']);
    }

}

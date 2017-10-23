import { Injectable } from '@angular/core';
import { Cliente } from 'app/cliente';

@Injectable()
export class CrudClientesService {
    clientes: Cliente[] = [
        { codigo:1, nome:"Lilica", email:"lili@cat.com", nascimento:"12/06/2009", rg:123659874 },
        { codigo:2, nome:"Luna", email:"luna@cat.com", nascimento:"11/11/2011", rg:666659874 },
        { codigo:3, nome:"Saori", email:"sasa@cat.com", nascimento:"24/12/2010", rg:123659666 }
        
        ];
        autoIncrement:number=4;

  constructor() { }
  getClientes(){
      return this.clientes;
  }
  
  adicionarCliente(cliente:Cliente){
      cliente.codigo=this.autoIncrement++;
      this.clientes.push(cliente);
  }
  
  getClientePorCodigo(codigo:number){
      return(this.clientes.find(cliente => cliente.codigo==codigo));
  }
  
  removerCliente(cliente:Cliente){
      let indice = this.clientes.indexOf(cliente, 0);
      if (indice > -1) {
          this.clientes.splice(indice, 1);
      }
  }
  
  atualizaCliente(codigo:number, cliente:Cliente){
      let indice = this.clientes.indexOf(this.getClientePorCodigo(codigo), 0);
      this.clientes[indice] = cliente;
    }
}

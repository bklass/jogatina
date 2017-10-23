import { Component, OnInit } from '@angular/core';
import { Mesa } from "app/mesa";
import { CrudMesasService } from "app/crud-mesas.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-mesas',
  templateUrl: './form-mesas.component.html',
  styleUrls: ['./form-mesas.component.css']
})
export class FormMesasComponent implements OnInit {
  mesa:Mesa;
  codigo: number;

  constructor(private servico:CrudMesasService, private router:Router, private rota:ActivatedRoute) { }

  ngOnInit() {
    this.codigo = this.rota.snapshot.params['cod'];
    
    if(isNaN(this.codigo)){
      this.mesa = new Mesa();
    }
    
    else{
      this.mesa = Object.assign({},
        this.servico.getMesaPorCodigo(this.codigo))
    }
  }
  
  salvarMesa(){
    if(isNaN(this.codigo)){
    this.servico.adicionarMesa(this.mesa);
    this.mesa = new Mesa();
  }
  else{
    this.servico.atualizaMesa(this.codigo, this.mesa);
  }
  this.router.navigate(['/listaMesa']);
  }
  
    voltar()    { 
      this.router.navigate(['/listaMesa']);
    }

}

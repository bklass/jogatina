import { Component, OnInit } from '@angular/core';
import { Jogo } from "app/jogo";
import { CrudJogosService } from "app/crud-jogos.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-jogos',
  templateUrl: './form-jogos.component.html',
  styleUrls: ['./form-jogos.component.css']
})
export class FormJogosComponent implements OnInit {
  jogo:Jogo;
  codigo: number;

  constructor(private servico:CrudJogosService, private router:Router, private rota:ActivatedRoute) { }

  ngOnInit() {
    this.codigo = this.rota.snapshot.params['cod'];
    
    if(isNaN(this.codigo)){
      this.jogo = new Jogo();
    }
    
    else{
      this.jogo = Object.assign({},
        this.servico.getJogoPorCodigo(this.codigo))
    }
  }
  
  salvarJogo(){
    if(isNaN(this.codigo)){
    this.servico.adicionarJogo(this.jogo);
    this.jogo = new Jogo();
  }
  else{
    this.servico.atualizaJogo(this.codigo, this.jogo);
  }
  this.router.navigate(['/listaJogo']);
  }
  
    voltar()    { 
      this.router.navigate(['/listaJogo']);
    }
}

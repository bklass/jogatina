import { Component, OnInit } from '@angular/core';
import { Jogo } from "app/jogo";
import { CrudJogosService } from "app/crud-jogos.service";

@Component({
  selector: 'app-tabela-jogos',
  templateUrl: './tabela-jogos.component.html',
  styleUrls: ['./tabela-jogos.component.css']
})
export class TabelaJogosComponent implements OnInit {
  jogos:Jogo[] = [];

  constructor(private servico:CrudJogosService) { }

  ngOnInit() {
    this.jogos = this.servico.getJogos();
  }
  remover(jogo:Jogo){
    this.servico.removerJogo(jogo);
  }

}

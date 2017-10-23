import { Component, OnInit } from '@angular/core';
import { Mesa } from "app/mesa";
import { CrudMesasService } from "app/crud-mesas.service";

@Component({
  selector: 'app-tabela-mesas',
  templateUrl: './tabela-mesas.component.html',
  styleUrls: ['./tabela-mesas.component.css']
})
export class TabelaMesasComponent implements OnInit {
  mesas:Mesa[] = [];

  constructor(private servico:CrudMesasService) { }

  ngOnInit() {
    this.mesas = this.servico.getMesas();
  }

  remover(mesa:Mesa){
    this.servico.removerMesa(mesa);
  }
}

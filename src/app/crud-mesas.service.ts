import { Injectable } from '@angular/core';
import { Mesa } from "app/mesa";

@Injectable()
export class CrudMesasService {
    mesas: Mesa[] = [
        {codigo:1, dtInicio: "23/10/2017 14:23", dtFim:"23/10/2017 18:14"},
        {codigo:2, dtInicio: "23/10/2017 15:30", dtFim:""}
        ];
        autoIncrement:number=3;

  constructor() { }
  getMesas(){
      return this.mesas;
  }
  adicionarMesa(mesa:Mesa){
        mesa.codigo=this.autoIncrement++;
        this.mesas.push(mesa);
    }

     getMesaPorCodigo(codigo:number){
      return(this.mesas.find(mesa => mesa.codigo==codigo));
  }
  
  removerMesa(mesa:Mesa){
      let indice = this.mesas.indexOf(mesa, 0);
      if (indice > -1) {
          this.mesas.splice(indice, 1);
      }
  }
  
  atualizaMesa(codigo:number, mesa:Mesa){
      let indice = this.mesas.indexOf(this.getMesaPorCodigo(codigo), 0);
      this.mesas[indice] = mesa;
    }

}

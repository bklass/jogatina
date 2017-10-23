import { Injectable } from '@angular/core';
import { Jogo } from "app/jogo";

@Injectable()
export class CrudJogosService {
    jogos: Jogo[] = [
        {    
            codigo: 1, 
            titulo: "As Viagens de Marco Polo", 
            editora: "Hans im Gluck Verlags", 
            anoLancamento: 2015, 
            qtdJogadores: "2 - 4",
            idadeRec: "12+",
            estoque: 2,
            duracao: "40 min - 100 min"
        },
        
        {    
            codigo: 2, 
            titulo: "Mice and Mystics", 
            editora: "Plaid Hat Games", 
            anoLancamento: 2012, 
            qtdJogadores: "1 - 4",
            idadeRec: "7+",
            estoque: 1,
            duracao: "120 min"
        }

        ];
    autoIncrement:number=3;
    
    constructor() { }
    getJogos(){
        return this.jogos;
    }
    adicionarJogo(jogo:Jogo){
        jogo.codigo=this.autoIncrement++;
        this.jogos.push(jogo);
    }
    
     getJogoPorCodigo(codigo:number){
      return(this.jogos.find(jogo => jogo.codigo==codigo));
  }
  
  removerJogo(jogo:Jogo){
      let indice = this.jogos.indexOf(jogo, 0);
      if (indice > -1) {
          this.jogos.splice(indice, 1);
      }
  }
  
  atualizaJogo(codigo:number, jogo:Jogo){
      let indice = this.jogos.indexOf(this.getJogoPorCodigo(codigo), 0);
      this.jogos[indice] = jogo;
    }
}

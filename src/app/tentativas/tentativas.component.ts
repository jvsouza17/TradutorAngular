import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges{
  
  @Input() public tentativas!: number;

  public coracoes: Coracao[] = [new Coracao(true), new Coracao(true), new Coracao(true)]

  constructor(){
    console.log(this.coracoes)
  }

  // Atualiza sempre que ocorre a alteração de alguma determinada variável
  ngOnChanges(): void {
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      //diminui um para corresponder a cada elemento dentro do objeto coracoes
      this.coracoes[indice - 1].cheio = false
    }
  }

  // Ocorre após o ngOnChanges e só atualiza uma única vez
  ngOnInit(): any{

  }

}

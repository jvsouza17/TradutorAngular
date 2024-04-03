import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent {

  // permite receber parâmetros externos usando o @Input da biblioteca core do angular
  // no componente painel, está entre colchetes o nome da variável que está sendo utilizada do componente pai
  @Input() public progresso: number = 0
  
  constructor(){
    
  }
}

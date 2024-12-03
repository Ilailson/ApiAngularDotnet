import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    funcionarios: Funcionario [] = [];
    funcionariosGeral: Funcionario [] = [];

    colunas = ['Situação', 'Nome', 'Sobrenome', 'Departamento', 'Ações', 'Excluir'];


    constructor( private funcionarioService: FuncionarioService){}

    ngOnInit(): void {
      this.funcionarioService.GetFuncionarios().subscribe(data => {
      const dados = data.dados;
      // console.log(data.dados)
      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR');
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR');
        })
        this.funcionarios = data.dados;
        this.funcionariosGeral = data.dados;
      });
    }


    // buscar campo imput
    search(event: Event){
      console.log('',event)
      const target = event.target as HTMLInputElement;
      console.log('',target)

      const value = target.value.toLowerCase();
      console.log('',value)

      //filtrar
      this.funcionarios = this.funcionariosGeral.filter(funcionario => {
        return funcionario.nome.toLocaleLowerCase().includes(value);
      })
    }
}

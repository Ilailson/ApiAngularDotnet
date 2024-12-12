import { Component, OnInit } from '@angular/core';
import { Secao } from '../models/Secao';
import { SecaoService } from '../services/secao.service';
import { MatDialog } from '@angular/material/dialog';
import { SecExcluirComponent } from './SecExcluir/SecExcluir.component';


@Component({
  selector: 'app-secao',
  templateUrl: './secao.component.html',
  styleUrls: ['./secao.component.css']
})
export class SecaoComponent implements OnInit {

  secoes: Secao [] = [];
  secoesGeral: Secao [] = [];

  colunas = ['Situação', 'Nome', 'Sobrenome', 'Departamento', 'Ações', 'Excluir'];

  constructor(
     private secaoService: SecaoService,
     public dialog: MatDialog) { }

  ngOnInit() {
      this.secaoService.GetSecoes().subscribe((data) => {
        const dados = data.dados;

        dados.map((item) => {
          item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR');
          item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR');
          })
          this.secoes = data.dados;
          this.secoesGeral = data.dados;
    })
  }

  OpenDialog(id: number) {
    this.dialog.open(SecExcluirComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }
    });
  }


  search(event: Event){
    console.log('',event)
    const target = event.target as HTMLInputElement;
    console.log('',target)

    const value = target.value.toLowerCase();
    console.log('',value)

    //filtrar
    this.secoes = this.secoesGeral.filter(secao => {
      return secao.nome.toLowerCase().includes(value)
             || secao.sobrenome.toLowerCase().includes(value)
             || secao.departamento.toLowerCase().includes(value);
    })
  }






}

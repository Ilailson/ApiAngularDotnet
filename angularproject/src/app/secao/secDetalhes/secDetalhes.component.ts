import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Secao } from 'src/app/models/Secao';
import { SecaoService } from 'src/app/services/secao.service';

@Component({
  selector: 'app-secDetalhes',
  templateUrl: './secDetalhes.component.html',
  styleUrls: ['./secDetalhes.component.css']
})
export class SecDetalhesComponent implements OnInit {
  secao?: Secao;
  id!: number;

  constructor(
    private secaoService: SecaoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.secaoService.GetSecao(this.id).subscribe(
      (data) => {
        const dados = data.dados; //variavel temporaria alterar as datas

        dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString('pt-BR');
        dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString('pt-BR');

        this.secao = data.dados;
      }
    )
  }



InativaSecao(): void {
  this.secaoService.InativarSecao(this.id)
    .subscribe(
      (data) => {
        this.router.navigate(['/secao']);
      }
    )
}

AtivarSecao(): void {
  this.secaoService.AtivarSecao(this.id)
    .subscribe(
      (data) => {
        this.router.navigate(['/secao']);
      }
    )
}

}

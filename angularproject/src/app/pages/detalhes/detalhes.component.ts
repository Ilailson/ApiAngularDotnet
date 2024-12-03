import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  funcionario?: Funcionario;
  id!:number;

  constructor(
  private funcinarioService:FuncionarioService,
  private route:ActivatedRoute,
  private router: Router) {}
ngOnInit(): void {
  //pegar - url - id . Definido - routting
  this.id = Number(this.route.snapshot.paramMap.get('id'));

  this.funcinarioService.GetFuncionario(this.id)
      .subscribe((data)=> {
        const dados = data.dados;
        console.log('Todos dados',dados)

        dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString('pt-BR');
        dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString('pt-BR');

        this.funcionario = data.dados;
        console.log('Funcionario',this.funcionario)


      }
  )}

  InativaFuncionario(): void {
    this.funcinarioService.InativaFuncionario(this.id)
        .subscribe(
            (data)=> {
                console.log('Todos os dados DATA',data)
                this.router.navigate(['']);
            })
  }

}

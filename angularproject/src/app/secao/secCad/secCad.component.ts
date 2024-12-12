import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Secao } from 'src/app/models/Secao';
import { SecaoService } from 'src/app/services/secao.service';

@Component({
  selector: 'app-secCad',
  templateUrl: './secCad.component.html',
  styleUrls: ['./secCad.component.css']
})
export class SecCadComponent implements OnInit {

  btnAcao = "Cadastrar!" //passando para o componente pai
  btnTitulo = "Cadastrar Seção" //passando para o componente pai



  constructor(private secaoService: SecaoService,
              private router: Router
  ) {}


  createSecao(secao: Secao){
    this.secaoService.createSecao(secao).subscribe((data)=>{
      this.router.navigate(['/'])
    })
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Secao } from 'src/app/models/Secao';
import { SecaoService } from 'src/app/services/secao.service';

@Component({
  selector: 'app-secEdit',
  templateUrl: './secEdit.component.html',
  styleUrls: ['./secEdit.component.css']
})
export class SecEditComponent implements OnInit {
btnAcao: string = 'Editar' //enviando para o pai
btnTitulo: string = 'Editar Seção'
secao!: Secao

  constructor(
    private secaoService: SecaoService,
    private router: Router,
    private route: ActivatedRoute){ }



  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.secaoService.GetSecao(id).subscribe(
      (data) => {
        this.secao = data.dados;
        console.log('Fetched Secao:', this.secao);
      }
    );

  }


  editarSecao(secao: Secao){
    this.secaoService.EditarSecao(secao).subscribe(
      (data) =>{
        this.router.navigate(['/secao']);
      }
    );
  }

}

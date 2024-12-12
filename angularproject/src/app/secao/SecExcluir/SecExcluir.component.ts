import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Secao } from 'src/app/models/Secao';
import { SecaoService } from 'src/app/services/secao.service';

@Component({
  selector: 'app-SecExcluir',
  templateUrl: './SecExcluir.component.html',
  styleUrls: ['./SecExcluir.component.css']
})
export class SecExcluirComponent implements OnInit {
inputdata: any
secao!: Secao

  constructor(
    private secaoService: SecaoService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public dataButton: any,
    private ref: MatDialogRef<SecExcluirComponent>
  ) { }

  ngOnInit() {
    this.inputdata = this.dataButton;
    this.secaoService.GetSecao(this.inputdata.id).subscribe((data) => {
      this.secao = data.dados;
    })
  }

excluir(){
  this.secaoService.excluirSecao(this.inputdata.id).subscribe((data) => {
    this.ref.close();
    window.location.reload();
  })
}

cancelar() {
  this.ref.close();
}

}

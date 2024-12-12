import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Secao } from 'src/app/models/Secao';


@Component({
  selector: 'app-secao-form',
  templateUrl: './secao-form.component.html',
  styleUrls: ['./secao-form.component.css']
})
export class SecaoFormComponent implements OnInit {
//mandar fora daqui - secao
@Output() onSubmit = new EventEmitter<Secao>();
@Input() btnAcao!: string; //recebendo informação dos filhos
@Input() btnTitulo!: string;
@Input() dadosSecao: Secao | null = null;

secaoForm!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.secaoForm = new FormGroup({
      id: new FormControl(this.dadosSecao? this.dadosSecao.id: 0),
      nome: new FormControl(this.dadosSecao ? this.dadosSecao.nome: '', [Validators.required]),
      sobrenome: new FormControl(this.dadosSecao ? this.dadosSecao.sobrenome: '', [Validators.required]),
      departamento: new FormControl(this.dadosSecao ? this.dadosSecao.departamento: '', [Validators.required]),
      turno: new FormControl(this.dadosSecao ? this.dadosSecao.turno: '', [Validators.required]),
      ativo: new FormControl(this.dadosSecao ? this.dadosSecao.ativo: true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date())
    })
  }

  submit(){
    // mandar componente - cadastro
    this.onSubmit.emit(this.secaoForm.value);
  }
}

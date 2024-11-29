import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/Funcionarios';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})


export class FuncionarioFormComponent implements OnInit {
  //mandar fora daqui - funcionario
  @Output() onSubmit = new EventEmitter<Funcionario>(); //mandando para fora um funcionario
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosFuncionario: Funcionario | null = null; //ira receber um funcionário ou talvés null.


  funcionarioForm!: FormGroup;


  constructor() {


  }

  /**
   * codição para quando for criar um novo funcionario e para quando for editar.
   * Caso se um novo funcionário o formulário fica vazio
   * se
   * Vem preenchido
   *
   */
  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      id: new FormControl(this.dadosFuncionario? this.dadosFuncionario.id: 0),
      nome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome: '', [Validators.required]),
      sobrenome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.sobrenome: '', [Validators.required]),
      departamento: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamento: '', [Validators.required]),
      turno: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.turno: '', [Validators.required]),
      ativo: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.ativo: true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date())
    })
  }

  submit(){
    // console.log(this.funcionarioForm)
    // console.log(this.funcionarioForm.value)

    // mandar componente - cadastro
    this.onSubmit.emit(this.funcionarioForm.value);
  }


}

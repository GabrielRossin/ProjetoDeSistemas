import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../../../Core/error-handler.service';
import { Cliente, Setor, Grupo } from '../../../Core/model';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../cliente.service';



@Component({
  selector: 'app-cadastro',
  template: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit
{
    cliente = new Cliente();

    setores: Array<Setor> = [];

    grupos: Array<Grupo> = [];

    atividade = [
      {label: 'Ativo', value: true},
      {label: 'Inativo', value: false}
    ];

  constructor(private clienteService: ClienteService,

    private errorHandle: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title) { }

  ngOnInit(): void{

    const codigoCliente = this.route.snapshot.params[`codigo`];
    this.title.setTitle('Cadastro de cliente');


    if(codigoCliente != "novo")
    {
      this.carregarCliente(codigoCliente);
    }
  }

  carregarCliente(codigo: number): void{
    this.clienteService.buscarPorCodigo(codigo)
      .then((cliente: Cliente) => {
        this.cliente = cliente;
      })
      .catch((erro: any) => this.errorHandle.handle(erro));
  }

  salvar(form: NgForm): void{
    if(this.editando){
      this.atualizarCliente(form);
    }else{
      this.adicionarCliente(form);
    }
  }

  get editando(): boolean{
    return Boolean(this.cliente.codigo);
  }

  adicionarCliente(form: NgForm){
    this.clienteService.adicionar(this.cliente)
      .then((clienteAdicionado: Cliente) => {
        this.messageService.add(
          {severity: 'success', detail: 'Cliente adicionado com sucesso!'});

        this.router.navigate(['/clientes', clienteAdicionado.codigo]);
      })
      .catch((erro: any) => this.errorHandle.handle(erro));
  }

  atualizarCliente(form: NgForm){
    this.clienteService.atualizar(this.cliente)
      .then((cliente: Cliente) => {
        this.cliente = cliente;
        this.messageService.add(
          {severity: 'success', detail: 'Cliente alterado com sucesso!'});
      })
      .catch((erro: any) => this.errorHandle.handle(erro));
  }

  novo(form: NgForm){
    form.reset(new Cliente);
    this.router.navigate(['/clientes/novo']);
  }


}

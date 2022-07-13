import { environment } from '../../../../environments//environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Cliente, Setor, Grupo } from '../../../core/core-model/model';

export class ClienteFilter{
  nome? : string;
  cpf?: string;
  salario?: number;
  setor: Setor = new Setor();
  grupo: Grupo = new Grupo();
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService{

  clientesUrl: string;

  constructor(private http: HttpClient,
    private datePipe: DatePipe)
    {
      this.clientesUrl = `${environment.apiUrl}/cliente`;
     }

  pesquisar(filtro: ClienteFilter): Promise<any>{
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AaWZzcC5lZHUuYnI6YWRtaW4==');

    let params = new HttpParams()
          .set('page', filtro.pagina.toString())
          .set('size', filtro.itensPorPagina.toString());

    if(filtro.nome){
      params = params.set('nome', filtro.nome);
    }

    if(filtro.cpf){
      params = params.set('cpf', filtro.cpf);
    }

    return this.http.get(`${this.clientesUrl}?resumo`, { headers, params })
      .toPromise()
      .then((response: any) => {
        const clientes = response["content"];

        const resultado = {
          clientes, total: response['totalElements']
        };

        return resultado;
      })
  }

  listarTodos() : Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(this.clientesUrl, { headers })
      .toPromise()
      .then((response: any) => response['content']);
  }

  adicionar(cliente: Cliente): Promise<Cliente> | any{
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

      return this.http.post<Cliente>(this.clientesUrl,
        Cliente.toJson(cliente), {headers})
        .toPromise();
  }

  excluir(codigo: number): Promise<any>{
    return this.http.delete(`${this.clientesUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  atualizar(cliente: Cliente): Promise<Cliente> | any{
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<Cliente>(`${this.clientesUrl}/${cliente.codigo}`, Cliente.toJson(cliente), { headers })
      .toPromise()
      .then(response => {
        const clienteAlterado = response;

        return clienteAlterado;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Cliente> | any{
    return this.http.get<Cliente>(`${this.clientesUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const cliente = response;

        return cliente;
      });
  }
}

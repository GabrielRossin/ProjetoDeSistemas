import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl: string;
  jwtPayload: any;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    this.oauthTokenUrl = `${environment.apiUrl}/oauth/token`;
    this.carregarToken();
  }


  login(usuario: string, senha: string): Promise<void>
  {
      const headers = new HttpHeaders()
                      .append('Content-Type', 'application/x-www-form-urlencoded')
                      .append('Authorization','Basic Y2xpZW50OmNsaWVudA==');

      const body = `username=${usuario}&password=${senha}&grant_type=password&`

      return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then((response: any) => {
                                  console.log(response);
                                  this.armazenarToken(response[`access_token`]);
                                })
      .catch((response:any) => {
                                  if(response.status === 400){
                                    if(response.error === 'invalid_grant')
                                    {return Promise.reject('Usuário e/ou senha inválida!');}
                                  }
                                  return Promise.reject(response);
                                })
  }

  register(usuario: string, email:string, senha: string): Promise<void>
  {
      const headers = new HttpHeaders()
                      .append('Content-Type', 'application/x-www-form-urlencoded')
                      .append('Authorization','Basic Y2xpZW50OmNsaWVudA==');

      const body = `username=${usuario}&email=${email}&password=${senha}&grant_type=password&`

      return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then((response: any) => {
                                  console.log(response);
                                  this.armazenarToken(response[`access_token`]);
                                })
      .catch((response:any) => {
                                  if(response.status === 400){
                                    if(response.error === 'invalid_grant')
                                    {return Promise.reject('Usuário e/ou senha inválida!');}
                                  }
                                  return Promise.reject(response);
                                })
  }





  obterNovoAccessToken(): Promise<void>
  {
      const headers = new HttpHeaders()
        .append('Content-Type', 'application/x-www-form-urlencoded')
        .append('Authorization', 'Basic Y2xpZW50OmNsaWVudA==');

      const body = 'grant_type=refresh_token';

      return this.http.post<any>(this.oauthTokenUrl, body, { headers, withCredentials: true })
        .toPromise()
        .then((response: any) => {
                                      this.armazenarToken(response[`access_token`]);
                                      console.log('Novo access token criado!');
                                      return Promise.resolve();
                                  })
        .catch(response => {
                              console.error('Erro ao renovar token.', response);
                              return Promise.resolve();
                           });
  }

  isAccessTokenInvalido(): boolean {
    const token = localStorage.getItem('token');
    return !token || this.jwtHelper.isTokenExpired(token);
  }

  private armazenarToken(token: string): void {
      this.jwtPayload = this.jwtHelper.decodeToken(token);
      localStorage.setItem('token', token);
  }

  private carregarToken(): void {
    const token = localStorage.getItem('token');
    if(token)
    {this.armazenarToken(token);}
  }

  limparAccessToken(): void {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  temPermissao(permissao: string): boolean
  {return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);}

  temQualquerPermissao(roles: any): boolean
  {
    for (const role of roles) {
      if (this.temPermissao(role))
      {return true;}
    }
    return false;
  }



}

import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokenRevokeUrl: string;

  constructor(private http: HttpClient, private auth: AuthService)
  {this.tokenRevokeUrl = `${environment.apiUrl}/tokens/revoke`;}

  logout(): Promise<any>
  {
    return this.http.delete(this.tokenRevokeUrl, {withCredentials: true})
      .toPromise()
      .then(()=> { this.auth.limparAccessToken(); })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Credenciais } from 'src/app/domain/credenciais';
import { tap } from 'rxjs/operators';
import { UserService } from '../service/user.service';


const API_URL = 'http://localhost:8080';

@Injectable( 
              {  providedIn: 'root'     } 
          )
export class AuthService {

    constructor (
                    public http          :  HttpClient, 
                    public userService   :  UserService,
               ) {
    }

    authenticate( creds : Credenciais ) {
        return this.http.post(
                                    'http://192.168.11.242:9000/police/login', 
                                    creds,
                                    {
                                        observe      : 'response', // para pegar o header
                                        responseType : 'text'      // pq o retorno do corpo é vazio, para o angular não tentar fazer um parse num corpo vazio
                                    }
                             )
                             .pipe( tap ( response => {
                                const token =   response.headers.get('Authorization');
                                this.userService.setToken(token);
                                console.log(`User ${creds.login} authenticated with token ${token}`);
                              }
      
        ) )
    }

    refreshToken() {
        return this.http.post(
                                `${API_URL}/auth/refresh_token`, 
                                {},
                                 {
                                         observe: 'response',
                                    responseType: 'text'
                                 }
                             )
                           

    }


    logout() {
        this.userService.setToken(null);
    }

    getHomeUser()  {
        this.userService.getHomeURL();
    }
}
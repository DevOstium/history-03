
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import * as jtw_decode from 'jwt-decode';
import { User } from './user.model';
import { StorageService } from './storage.service';

@Injectable (  
               {providedIn: 'root'}
            )
export class UserService { 

    // Subject: eu posso emitir um valor para ele e ao mesmo tempo 
    //          posso me inscrever subscribe para receber esse valor de volta
    // exmplo: private userSubject = new Subject<User>();
    // O HeadComponent ainda não foi renderizado. E o Subject já criou, passou. 

    // BehaviorSubject:   
    // ele emite o valor e fica esperando alguem pegar o dado.... por isso, é possível pegar o valor mesmo que demore para ser rendereizado.
    private userSubject = new BehaviorSubject<User>(null);
   
    private userName : string;  // para pegar o usuário logado
    homeURL  : string; 

    constructor( private storageService: StorageService ) { 

        //this.storageService.hasToken() && 
        this.decodeAndNotify();  // para o token permancer no navegar, entrar e continuar logado
    
    }

    setToken(token: string) {
        this.storageService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    decodeAndNotify() {
        const token    = this.storageService.getToken();  
        if( token != null ){
            const user     = jtw_decode(token) as User;       
           // this.getRemoveToken(user); 
           this.userSubject.next(user); 
        } else {
            const user = new User(null, null, null, null);
            this.userSubject.next(user); 
        }
    }

    getRemoveToken( user : User ) {
        if( !user.homeURL ) {
            this.storageService.removeToken();
            const userNull = new User(null, null, null, null);
            this.userSubject.next(userNull); 
        } else {
            this.userName  = user.login;                      
            this.homeURL   = user.homeURL;
            this.userSubject.next(user); 
        }
    }

    logout() {
        this.storageService.removeToken();
        this.userSubject.next(null);  //  para emitir um null
    }

    isLogged() {
        return this.storageService.hasToken();
    }

    getUserName() {
        return this.userName;  // para pegar o usuário logado
    }

    getHomeURL()  {
        return this.homeURL;
    }

}
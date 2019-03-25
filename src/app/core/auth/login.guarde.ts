import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable(  
             { providedIn: 'root'}
          )
export class LoginGuard implements CanActivate {

    // LoginGuard para ir diretor para Home do Usuário
    // se tentar ir para tela de login, redirect para home de cada usuario
    // é especifico para NÃO ACESSAR A TELA DE LOGIN JÁ LOGADO

    constructor(
                 private userService : UserService,
                 private router      : Router
                ) {}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            
                    if (this.userService.isLogged()) {
                            this.router.navigateByUrl(this.userService.getHomeURL()); 
                        return false;
                    } 
            

            return true;
    }
}
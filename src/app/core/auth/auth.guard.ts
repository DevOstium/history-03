import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

    // AuthGuard se estou logado, tenho acesso, se não estiver logado, redirect para a a tela de login
    // Para bloquear qual acesso, uso o AuthGuard

    constructor(
                    private userService : UserService,
                    private router      : Router
               ) {}

    canActivate (
                 route: ActivatedRouteSnapshot, 
                 state: RouterStateSnapshot
                ) : boolean | Observable<boolean> | Promise<boolean> {
                    
                        // { queryParams: { fromUrl: state.url } isso quando eu for tentar acessar uma url e meu token já expirou,
                        // então o usuário primeiro vai ser redirecionado para o login, e depois de eu logar vou para a rota desejada
                        if(!this.userService.isLogged()) {
                                //console.log(state.url) // retorna a rota de tentativa de acesso: ex: /compras
                            
                                // Se não estou logado, redirect para a rota de login e depois de logar redirect para a rota desejada.
                                // Parte 04 Aula 07 item 06
                                
                                   this.router.navigate ( [''], { queryParams: { fromUrl : state.url } } );

                            return false;
                        } 
                        /* 
                        else {
                             // Lembrar de  claims.put("homeURL", "/vendas");
                            if ( state.url != this.userService. getHomeURL() ) {
                                this.router.navigate(['acesso-nao-autorizado']);
                            } 
                        }
                        */
                        
            return true;
    }
}
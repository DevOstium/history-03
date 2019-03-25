import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { User } from '../service/user.model';
import { UserService } from '../service/user.service';

@Component({
    selector: 'ap-header',
    templateUrl: './header.view.html'
})
export class HeaderController { 

    user$: Observable<User>;

    constructor(
        private userService : UserService, 
        private router      : Router
       ) {

    this.user$ = userService.getUser();

// elimino isso o <div *ngIf="(user$ | async) as user; else login">
// this.user$.subscribe( user => this.user = user); // Peguei o valor do Obeservable        
}

    logout() {
        this.userService.logout();
        this.router.navigate(['']);  // rota para o /login
    }

}
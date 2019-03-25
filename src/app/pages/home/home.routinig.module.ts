import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeController } from './home.controller';
import { LoginGuard } from 'src/app/core/auth/login.guarde';
import { SignInController } from './signin/signin.controller';


const routes: Routes = [
    { 
        //http://localhost:4200/#/home/
        path        : '',  // carregar o primeiro com os dados do HomeComponent
        component   : HomeController,
        canActivate : [LoginGuard],
        children    : [
                        { 
                            //http://localhost:4200/#/home/
                            path      : '',     //  carrego juntos com o HomeComponent
                            component : SignInController,
                            data      : {
                                            title: 'Sign in'
                                        }
                        }       
                    ]
    }     
                  
];

@NgModule({
    imports: [ 
        RouterModule.forChild(routes) 
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }


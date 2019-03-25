import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HomeController } from './home.controller';
import { HomeRoutingModule } from './home.routinig.module';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { SignInController } from './signin/signin.controller';
    

@NgModule({
    declarations: [ 
        SignInController,
        HomeController
    ],
    imports: [ 
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [  ]
})
export class HomeModule { }
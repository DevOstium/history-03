import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HeaderController } from './header/header.controller';
import { FooterController } from './footer/footer.controller';
import { ShowIfLoggedModule } from '../shared/directives/show-if-logged/show-if-logged.module';
import { TokenInterceptor } from './token/token.interceptor';



@NgModule({
    declarations: [
        HeaderController,
        FooterController
    ],
    exports: [
        HeaderController,
        FooterController
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        ShowIfLoggedModule
    ],
    providers: [
        {
            provide  : HTTP_INTERCEPTORS,
            useClass : TokenInterceptor,
            multi    : true
        }
    ]
})
export class CoreModule { }
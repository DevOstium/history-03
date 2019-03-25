import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { AcessoNaoAutorizadoComponent } from './acesso-nao-autoizado/acesso-nao-autorizado.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NotFoundComponent,
    GlobalErrorComponent,
    AcessoNaoAutorizadoComponent
  ],
  providers: [
  ]
})
export class ErrorsModule { }

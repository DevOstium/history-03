import { NgModule } from '@angular/core';
import { UsuarioController } from './usuario/usuario.contoller';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { UsuarioDetailController } from './detais/usuarioDetail.comtroller';


@NgModule({
    declarations: [
                    UsuarioController,
                    UsuarioDetailController
    ],
        exports : [
                    UsuarioController,
                    HttpClientModule 
    ],
        imports : [
                    CommonModule, 
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    RouterModule,
                    UsuarioRoutingModule,
                    VMessageModule
     ]
})


export class UsuarioModule {

}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioController } from './usuario/usuario.contoller';
import { UsuarioDetailController } from './detais/usuarioDetail.comtroller';



const routes: Routes = [
  { path: '',            component: UsuarioController },
  { path: ':idUsuario',  component: UsuarioDetailController }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }




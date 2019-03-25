import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/errors/not-found/not-found.component';
import { VendasController } from './pages/vendas/vendas.controller';
import { ComprasController } from './pages/compras/compras.controller';
import { AuthGuard } from './core/auth/auth.guard';

import { AcessoNaoAutorizadoComponent } from './core/errors/acesso-nao-autoizado/acesso-nao-autorizado.component';


const routes: Routes = [

    {   path  : '',        pathMatch     : 'full',  redirectTo  : 'home'  },
    
    {   path  : 'home',    loadChildren  : './pages/home/home.module#HomeModule' },
    {   path  : 'usuario', loadChildren  : './pages/usuarios/usuario.module#UsuarioModule' },
    
    {   path  : 'compras', canActivate : [AuthGuard],  component: ComprasController,  data: { title: 'Compras' } }, 
    {   path  : 'vendas',  canActivate : [AuthGuard],  component: VendasController,   data: { title: 'Vendas'  } },  
  
    
    {  path   : 'acesso-nao-autorizado', component: AcessoNaoAutorizadoComponent, data: { title: 'Acesso Não Autorizado' }  },  
    {  path   : 'not-found', component: NotFoundComponent, data: { title: 'Not found' }  },       
    {  path   : '**', redirectTo: 'not-found' }  
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { useHash: true } )   // { useHash: true } é para usar o # na url http://localhost:4200/#/pedido/
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }


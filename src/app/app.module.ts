import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorsModule } from './core/errors/errors.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing.module';
import { VendasModule } from './pages/vendas/vendas.module';
import { ComprasModule } from './pages/compras/compras.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ErrorsModule,
    CoreModule,
    AppRoutingModule,
    VendasModule,
    ComprasModule
   
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

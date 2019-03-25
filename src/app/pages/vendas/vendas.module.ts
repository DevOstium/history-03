import { NgModule } from '@angular/core';
import { VendasController } from './vendas.controller';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[VendasController],
    exports: [VendasController],
    imports: [
        CommonModule
    ]
})
export class VendasModule {

}
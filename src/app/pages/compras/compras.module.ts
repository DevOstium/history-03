import { NgModule } from '@angular/core';
import { ComprasController } from './compras.controller';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[ComprasController],
    exports: [ComprasController],
    imports: [CommonModule]
})
export class ComprasModule {}
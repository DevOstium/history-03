import { Component } from '@angular/core';

import { Usuario } from 'src/app/domain/usuario.model';

@Component({
    templateUrl : "./usuario.view.html"
})
export class UsuarioController{

    items = 
            [
                new Usuario( 1 , "Jose" ),  
                new Usuario( 2 , "Maria"),  
                new Usuario( 3 , "Antonio")  
            ]

}
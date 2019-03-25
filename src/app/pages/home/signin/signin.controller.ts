import { Component, OnInit, ViewChild, ElementRef,  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/plataform-detector/platform-detector.service';
import { stringify } from '@angular/compiler/src/util';
import { UserService } from 'src/app/core/service/user.service';

@Component({
    templateUrl: './signin.view.html'
})
export class SignInController implements OnInit {
    
    fromUrl    : string;
    loginForm  : FormGroup;

    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
                private formBuilder              : FormBuilder,
                private authService              : AuthService,
                private userService              : UserService,
                private router                   : Router,
                private platformDetectorService  : PlatformDetectorService,
                private activatedRoute           : ActivatedRoute
               ) { }

    ngOnInit(): void {
                    
                    this.activatedRoute.queryParams.subscribe ( params => this.fromUrl = params['fromUrl'] );
                    
                    this.loginForm = this.formBuilder.group (
                                                              {
                                                                login: ['jose', Validators.required],
                                                                senha: ['Cba@2010', Validators.required]
                                                              }
                                                            );

    } 

    login() {

        this.authService.authenticate(  this.loginForm.value )
                                       .subscribe (  
                                                     () =>      this.router.navigateByUrl( 'home' ) 
                                                                /*
                                                                this.fromUrl
                                                            ?   this.router.navigateByUrl( this.fromUrl ) 
                                                            :   this.router.navigateByUrl( this.userService.getHomeURL() )
                                                                */
                                                           ,
                                                    error => {
                                                                    console.log(error);
                                                                    this.platformDetectorService.isPlatformBrowser() &&  
                                                                    this.userNameInput.nativeElement.focus(); 
                                                                    alert('Login Falhou');

                                                             }

                                       );    

                        

    }
}
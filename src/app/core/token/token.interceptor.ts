
import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpSentEvent } from "@angular/common/http";
import { HttpHeaderResponse } from "@angular/common/http";
import { HttpProgressEvent } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { HttpUserEvent } from "@angular/common/http";
import { StorageService } from '../service/storage.service';


@Injectable()
// Lembrar de colocar no core.module.ts na item providers: []
export class TokenInterceptor implements HttpInterceptor {
    
    constructor( private storageService: StorageService ) {}

    intercept( req : HttpRequest<any>, next: HttpHandler ) : Observable< HttpSentEvent           | 
                                                                        HttpHeaderResponse       |
                                                                        HttpProgressEvent        | 
                                                                        HttpResponse<any>        |
                                                                        HttpUserEvent<any> 
                                                                       >  {
       
                if(this.storageService.hasToken()) {
                   
                    const token = this.storageService.getToken();
                    
                        req = req.clone(
                                        {
                                            setHeaders: {
                                                        'Authorization' : token
                                                        }
                                        }
                                    );
                }

        return next.handle(req);  // para seguir a navegação
    }
}
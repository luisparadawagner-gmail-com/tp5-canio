import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ConsultarPService{
    constructor(private httpCliente : HttpClient){}

    getPersonas(): Observable<any>{
        return this.httpCliente.get('./../assets/personas.json');
    }
}
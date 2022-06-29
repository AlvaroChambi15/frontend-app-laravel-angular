import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from "src/environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //CAPTURANDO EL SERVIDOR QUE SE UTILIZARA DE ENVIRONMENT
  urlBase = environment.servidor

  constructor(private http: HttpClient) { }
  
  loginConLaravel(datos:any){
    
    //return this.http.post(this.urlBase+"/v1/auth/login", datos)
    return this.http.post(`${this.urlBase}/v1/auth/login`, datos)
  }

}
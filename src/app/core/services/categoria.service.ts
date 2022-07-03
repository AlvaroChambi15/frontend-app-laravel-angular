import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlBase = environment.servidor
  constructor(private http: HttpClient) { }

  indexCategoria(){
    return this.http.get(`${this.urlBase}/categoria`)
  }

  storeCategoria(datos: any){
    return this.http.post(`${this.urlBase}/categoria`, datos)
  }

  updateCategoria(datos, id){
    return this.http.put(`${this.urlBase}/categoria/${id}`, datos)
  }

  showCategoria(id){
    return this.http.get(`${this.urlBase}/categoria/${id}`)
  }

  destroyCategoria(id){
    return this.http.delete(`${this.urlBase}/categoria/${id}`)
  }
  
}

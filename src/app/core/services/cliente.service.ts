import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlBase = environment.servidor

  constructor(private http: HttpClient) { }

  indexCliente(page = 1, q = null) {
    return this.http.get(`${this.urlBase}/cliente?page=${page}&q=${q}`);
  }

  storeCliente(datos: any) {
    return this.http.post(`${this.urlBase}/cliente`, datos);
  }

  updateCliente(datos, id) {
    return this.http.put(`${this.urlBase}/cliente/${id}`, datos);
  }

  showCliente(id) {
    return this.http.get(`${this.urlBase}/cliente/${id}`);
  }

  destroyCliente(id) {
    return this.http.delete(`${this.urlBase}/cliente/${id}`);
  }

  subirImagen(fd, id) {
    return this.http.post(`${this.urlBase}/cliente/${id}/actualizar-imagen`, fd);
  }

}


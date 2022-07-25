import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  urlBase = environment.servidor

  constructor(private http: HttpClient) { }

  indexPedido(page = 1, q = null) {
    return this.http.get(`${this.urlBase}/pedido?page=${page}&q=${q}`);
  }

  storePedido(datos: any) {
    return this.http.post(`${this.urlBase}/pedido`, datos);
  }

  updatePedido(datos, id) {
    return this.http.put(`${this.urlBase}/pedido/${id}`, datos);
  }

  showPedido(id) {
    return this.http.get(`${this.urlBase}/pedido/${id}`);
  }

  destroyPedido(id) {
    return this.http.delete(`${this.urlBase}/pedido/${id}`);
  }

  reportePDF() {
    return this.http.get(`${this.urlBase}/pdf`);
  }


}

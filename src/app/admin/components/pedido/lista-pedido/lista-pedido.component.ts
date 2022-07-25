import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { PedidoService } from 'src/app/core/services/pedido.service';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.scss']
})
export class ListaPedidoComponent implements OnInit {

  totalRecords: number;

  loading: boolean;

  id_prod_img: number = 0;

  productDialog: boolean;

  displayModalImagen: boolean;

  pedidos: any[];

  pedido: any;

  selectedPedidos: any[];

  categorias: any[];

  submitted: boolean;


  page: number;

  lastPage: number;

  displayModalProductos: boolean;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.listarPedidos(this.page);
  }

  loadPedidos(event: LazyLoadEvent) {
    this.loading = true;
    console.log(event);

    this.page = (event.first / event.rows) + 1;

    this.listarPedidos(this.page)
    /* setTimeout(() => {
      this.customerService.getCustomers({ lazyEvent: JSON.stringify(event) }).then(res => {
        this.customers = res.customers;
        this.totalRecords = res.totalRecords;
        this.loading = false;
      })
    }, 1000); */
  }

  listarPedidos(page) {
    this.loading = true;
    this.pedidoService.indexPedido(page).subscribe(
      (res: any) => {
        console.log(res.data);
        //Obteniendo el total de páginas
        this.lastPage = res.last_page;
        console.log(res.last_page);

        this.pedidos = res.data;
        console.log("algo");

        console.log(this.pedidos);

        this.totalRecords = res.total;


        this.loading = false;

      }
    )

  }

  showModalProductos(pedido) {
    this.displayModalProductos = true;
    this.pedido = pedido;
  }


}

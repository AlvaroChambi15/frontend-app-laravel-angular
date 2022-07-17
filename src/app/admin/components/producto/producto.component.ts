import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ProductoService } from 'src/app/core/services/producto.service';


interface Product {
  nombre: string;
  stock: number,
  precio: number,
  descripcion: string,
  categoria_id: number
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ProductoComponent implements OnInit {

  productDialog: boolean;

  products: Product[];

  product: Product;

  selectedProducts: Product[];

  submitted: boolean;

  statuses: any[];

  constructor(
    private productoService: ProductoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,) { }

  ngOnInit(): void {
    this.productoService.indexProducto().subscribe(
      (res: any) => {

        console.log(res.data);

        this.products = res.data;
      }
    )
  }

  openNew() {
    this.product = { nombre: "", precio: 0, stock: 0, descripcion: '', categoria_id: 0 };
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

}

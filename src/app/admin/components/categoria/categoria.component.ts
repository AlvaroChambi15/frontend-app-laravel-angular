import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/core/services/categoria.service';

import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import { LazyLoadEvent } from 'primeng/api';

interface Categoria{
  nombre: string,
  descripcion: string
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class CategoriaComponent implements OnInit {

  listaCategorias: Categoria[]

  displayModalCategoria: boolean

  displayModalCategoria2: boolean = false;

  idEditar: Number = 0;

  obj_categoria: Categoria = {nombre:'', descripcion:''};

  loading: boolean;

  categoriaForm = new FormGroup({
    nombre: new FormControl(this.obj_categoria.nombre, [Validators.required]),
    descripcion: new FormControl(this.obj_categoria.descripcion)
  })


  constructor(private categoriaService: CategoriaService,
              private confirmationService: ConfirmationService, 
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias(){
    this.loading = true;
    this.categoriaService.indexCategoria().subscribe(
      (res: Categoria[]) => {
        this.listaCategorias = res
        this.loading = false;
      }
    )
  }

  guardarCategoria(){

    if(this.idEditar == 0){

      this.categoriaService.storeCategoria(this.categoriaForm.value).subscribe(
        (res: any) => {
          this.listarCategorias();
          this.displayModalCategoria = false;
          this.displayModalCategoria2 = false;
  
          this.categoriaForm.reset();
  
          alert("GUARDADO!");
        },
        (error: any) => {
          console.log(error)
        }
      )

    }else{
      this.categoriaService.updateCategoria(this.categoriaForm.value, this.idEditar).subscribe(
        (res: any) => {
          this.listarCategorias();
          this.displayModalCategoria = false;
          this.displayModalCategoria2 = false;
  
          this.categoriaForm.reset();
  
          alert("GUARDADO!");
        },
        (error: any) => {
          console.log(error)
        }
      )
    }

  }

  showModalCategoriaDialog() {
    this.displayModalCategoria = true;
}

  showModalCategoriaDialog2() {
    this.displayModalCategoria2 = true;
  }

  showModalEditCategoriaDialog2(categoria){
    console.log(categoria);
    this.idEditar = categoria.id;
    this.obj_categoria = categoria;  

    this.prepararFormularioEdit();

    this.showModalCategoriaDialog2();      
  }

  prepararFormularioEdit(){
    this.categoriaForm = new FormGroup({
      nombre: new FormControl(this.obj_categoria.nombre, [Validators.required]),
      descripcion: new FormControl(this.obj_categoria.descripcion)
    })
  }

  confirmEliminacion(categoria){
    this.confirmationService.confirm({
      message: 'Esta seguro de Eliminar?',
      header: 'Confirmar Eliminación',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.categoriaService.destroyCategoria(categoria.id).subscribe(
            (res: any) => {
              this.messageService.add({severity:'info', summary:'Confirmed', detail:'Eliminado!'});              
              this.listarCategorias();
            },
            (error: any) => {
              this.messageService.add({severity:'error', summary:'ERROR', detail:'Ocurrio un error al momento de eliminar!'});
            }
          )
      },
      reject: (type) => {
          switch(type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({severity:'warn', summary:'Rechazado', detail:'Has Rechazado'});
              break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({severity:'warn', summary:'Cancelado', detail:'Has cancelado'});
              break;
          }
      }
  });
  }


  
  // MENSAJES



}

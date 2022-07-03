import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/core/services/categoria.service';

interface Categoria{
  nombre: string,
  descripcion: string
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  listaCategorias: Categoria[]
  displayModalCategoria: boolean

  categoriaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('')
  })


  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.listarCategorias() 
  }

  listarCategorias(){
    this.categoriaService.indexCategoria().subscribe(
      (res: Categoria[]) => {
        this.listaCategorias = res
      }
    )
  }

  guardarCategoria(){
    this.categoriaService.storeCategoria(this.categoriaForm.value).subscribe(
      (res: any) => {
        this.listarCategorias();
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  showModalCategoriaDialog() {
    this.displayModalCategoria = true;
}

}

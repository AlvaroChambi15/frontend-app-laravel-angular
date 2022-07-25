import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/core/services/pedido.service';

@Component({
  selector: 'app-reporte-pdf',
  templateUrl: './reporte-pdf.component.html',
  styleUrls: ['./reporte-pdf.component.scss']
})
export class ReportePdfComponent implements OnInit {

  constructor(private pedidoService: PedidoService) { }

  pdfSrc = "http://127.0.0.1:8000/api/pdf";

  ngOnInit(): void {
    // this.pedidoService.reportePDF().subscribe(
    //   ()
    // )
  }



}

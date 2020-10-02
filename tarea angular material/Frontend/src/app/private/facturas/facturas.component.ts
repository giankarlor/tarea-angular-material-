import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import { FacturasService } from './../../services/factura.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  constructor(private facturaService: FacturasService) { }

  facturas: Factura[];
  columnsToDisplay = ['Id', 'Cliente_id', 'Empleado_id', 'Creado', 'Estado'];

  ngOnInit(): void {
    this.facturaService.getFacturas().subscribe(
      res => {
        this.facturas = res;
      }
    );
  }

}

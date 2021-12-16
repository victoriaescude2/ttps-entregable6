import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/model/servicio';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-list-servicios',
  templateUrl: './list-servicios.component.html',
  styleUrls: ['./list-servicios.component.css']
})
export class ListServiciosComponent implements OnInit {
  listaServicios: Servicio[] = []
  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {
    this.servicioService.getServices().subscribe(servicios=>this.listaServicios=servicios)
  }

}

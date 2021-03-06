import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/model/servicio';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-list-mis-servicios',
  templateUrl: './list-mis-servicios.component.html',
  styleUrls: ['./list-mis-servicios.component.css']
})

export class ListMisServiciosComponent implements OnInit {
  servicios: Servicio[] = []
  public page: number = 1;
  constructor(private servicioService: ServicioService, private router:Router) { }
  
  ngOnInit(): void {
    // this.servicioService.getServiciosPorUser().subscribe(servicios=>this.servicios=servicios)
    this,this.servicioService.getServiciosPorUser().subscribe(servicios=>this.servicios=servicios);
  }

  editarServicio(servicioId:string){
    sessionStorage.setItem("serviceSelected",servicioId)
    this.router.navigateByUrl('edit-servicio');
  }

  deleteServicio(servicioId: string){
    this.servicioService.deleteService(servicioId)
  }

}

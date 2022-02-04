import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TipoServicio } from 'src/app/model/tipo-servicio';
import { ServicioService } from 'src/app/service/servicio.service';
import { TipoServicioService } from 'src/app/service/tipo-servicio.service';

@Component({
  selector: 'app-new-servicio',
  templateUrl: './new-servicio.component.html',
  styleUrls: ['./new-servicio.component.css']
})
export class NewServicioComponent implements OnInit {
  tipos: TipoServicio[] = []
  constructor(private servicioService: ServicioService, private tipoServicioService: TipoServicioService) { }



  ngOnInit(): void {
    this.tipoServicioService.getTiposDeServicio().subscribe(tipos=>this.tipos=tipos)
  }

  onSubmit(service: NgForm) {
    this.servicioService.createService(service);
  }
}
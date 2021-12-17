import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-edit-servicio',
  templateUrl: './edit-servicio.component.html',
  styleUrls: ['./edit-servicio.component.css']
})
export class EditServicioComponent implements OnInit {
  enviado:Boolean = false;
  tipo: String = "";
  nombre: String = "";
  descripcion: String = "";
  urlWeb: String = "";
  redes: String = "";
  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.enviado=false;
    this.servicioService.recuperarService()
    .subscribe(
      (servicio) => {
        this.tipo= servicio.tipo;
        this.nombre= servicio.nombre;
        this.descripcion= servicio.descripcion;
        this.urlWeb= servicio.urlWeb;
        this.redes= servicio.redes;
      }
    );
  }

  onSubmit(servicio: NgForm) {
    let envio= this.comprobarCampos(servicio);

    this.servicioService.editService(envio).subscribe(
      () => {
        console.log(servicio)
        //actualiza los datos
        this.enviado=true;
      },
      (err: HttpErrorResponse) => {
        console.log('estado de error: ', err.status, typeof err.status);
      }
    );
  }

  comprobarCampos(data: NgForm): NgForm{
    if (data.value.tipo==""){
      data.value.tipo= this.tipo;
    }
    if (data.value.nombre==""){
      data.value.nombre= this.nombre;
    }
    if (data.value.descripcion==""){
      data.value.descripcion= this.descripcion;
    }
    if (data.value.url==""){
      data.value.urlWeb= this.urlWeb;
    }
    if (data.value.redes==""){
      data.value.redes= this.redes;
    }
    return data;
  }

}

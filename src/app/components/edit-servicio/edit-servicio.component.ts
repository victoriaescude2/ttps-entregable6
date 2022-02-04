import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoServicio } from 'src/app/model/tipo-servicio';
import { ServicioService } from 'src/app/service/servicio.service';
import { TipoServicioService } from 'src/app/service/tipo-servicio.service';

@Component({
  selector: 'app-edit-servicio',
  templateUrl: './edit-servicio.component.html',
  styleUrls: ['./edit-servicio.component.css']
})
export class EditServicioComponent implements OnInit {
  enviado:Boolean = false;
  nombre:String="";
  descripcion:String="";
  urlWeb:String="";
  tipo:String="";
  redes:String="";
  tipos: TipoServicio[] = []
  constructor(private servicioService:ServicioService, private tipoServicioService: TipoServicioService, private router:Router) { }

  ngOnInit(): void {
    let id = sessionStorage.getItem("serviceSelected")
    this.enviado=false;
    if (id != null){
      this.tipoServicioService.getTiposDeServicio().subscribe((tipos)=>{this.tipos=tipos})
      this.servicioService.recuperarService(id).subscribe((servicio)=>{
        this.nombre=servicio.nombre;
        this.tipo=servicio.tipo;
        this.descripcion=servicio.descripcion;
        this.urlWeb=servicio.urlWeb;
        this.redes=servicio.redes;
      })
    };
  }

  onSubmit(edit: NgForm) {
    let envio= this.comprobarCampos(edit);
    this.servicioService.editService(envio);
    this.router.navigateByUrl('/list-mis-servicios')
  }

  comprobarCampos(data: NgForm): NgForm{
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
    if (data.value.tipo==""){
      data.value.tipo= this.tipo;
    }
    return data;
  }

}

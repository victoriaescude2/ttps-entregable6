import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicio } from '../model/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor(private http: HttpClient, private router: Router) { }

  getServices(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${environment.url}/servs/`);
  }

  recuperarService(id:string): Observable<Servicio>{
    return this.http.get<Servicio>(`${environment.url}/servs/`+id);
  }

  getServiciosPorUser():Observable<Servicio[]>{
    return this.http.get<Servicio[]>(`${environment.url}/servs/user/`+sessionStorage.getItem('id'))
  }

  public editarServicio(serv: any): void {

      

  }

  editService(service: NgForm){
    let servicio = {
      nombre: service.value.nombre,
      descripcion: service.value.descripcion,
      urlWeb: service.value.urlWeb,
      redes: service.value.redes,
      tipo: {id:service.value.tipo},
      // usuario: {id:sessionStorage.getItem('id')},
    };
    console.log(servicio)
    let id = sessionStorage.getItem("serviceSelected")
    this.http.put<any>(`${environment.url}/servs/`+id , servicio).subscribe(
      (response) => {
        console.log(response);
        this.router.navigateByUrl('/list-servicio')
      },
      (err: HttpErrorResponse) => {
        console.log('estado de error: ', err.status);
        this.router.navigateByUrl('/edit-servicio')
      }
    );
  }

  deleteService(id: string): void {
    let res = true;
    this.http.delete(`${environment.url}/servs/`+id).subscribe(
      (response) => {
        res=true;
        console.log(response);
      },
      (err: HttpErrorResponse) => {
        res=false;
        console.log('estado de error: ', err.status);
      }
    );
    window.location.reload();
  }

  
  createService(sv: NgForm) {
    let servicio = {
      nombre: sv.value.nombre,
      descripcion: sv.value.descripcion,
      urlWeb: sv.value.urlWeb,
      redes: sv.value.redes,
      tipo: {id:sv.value.tipo_servicio},
      usuario: {id:sessionStorage.getItem('id')},
    };
    console.log(servicio.tipo);
    this.http.post<any>(`${environment.url}/servs`, servicio).subscribe((response) => {
      console.log(response);
    this.router.navigateByUrl('/home')
    },
    (err: HttpErrorResponse) => {
      console.log('estado de error: ', err.status);
      this.router.navigateByUrl('/new-servicio')
    }
    );
}
}

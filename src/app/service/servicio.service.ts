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
    return this.http.get<Servicio[]>(`${environment.url}/servs`);
  }

  recuperarService(): Observable<Servicio>{
    let id = 1;
    return this.http.get<Servicio>(`${environment.url}/servs/${id}`);
  }

  getServiciosPorUser():Observable<Servicio[]>{
    return this.http.get<Servicio[]>('${environment.url}/servs/'+sessionStorage.getItem('id'))
  }

  public editarServicio(serv: any): void {

      

  }


  editService(service: NgForm): Observable<Servicio> {
    let id = 1;
    return this.http.put<Servicio>(
      `${environment.url}/servs/${id}`,
      service.value,
      {
        headers: { token: '1123456' },
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
    this.http.post<any>(`${environment.url}/servs`, sv.value).subscribe((response) => {
      console.log(response);
    this.router.navigateByUrl('/home');
  });
}


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoServicio } from '../model/tipo-servicio';

@Injectable({
  providedIn: 'root'
})
export class TipoServicioService {

  constructor(private http:HttpClient) { }

  getTiposDeServicio(): Observable<TipoServicio[]>{
    return this.http.get<TipoServicio[]>(`${environment.url}/tipoServs`)
  }
}

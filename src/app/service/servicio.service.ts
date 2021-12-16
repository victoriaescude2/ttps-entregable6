import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

}

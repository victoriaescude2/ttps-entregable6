import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  elEstado: boolean = false;
  
  constructor(private http: HttpClient, private router: Router) {}

  getUsuario() {
    let id = sessionStorage.getItem('id');
    this.http
      .get<Usuario>(`http://localhost:8080/ttps-spring/usuario/${id}`, {
        headers: { token: '1123456' },
      })
      .subscribe(
        (response) => {
          //actualiza los datos
          return response;
        },
        (err: HttpErrorResponse) => {
          console.log('estado de error: ', err.status, typeof err.status);
          return null;
        }
      );
  }

  recuperarData(): Observable<Usuario> {
    let id = sessionStorage.getItem('id');
    return this.http
      .get<Usuario>(`http://localhost:8080/ttps-spring/users/${id}`, {
        headers: { token: '1123456' },
      });
  }

  isLogin() {
    return !(sessionStorage.getItem('id') == null);
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }

  autenticacion(login: NgForm){
    const body = {
      email: `${login.value.email}`,
      password: `${login.value.password}`,
    };
    this.http.post<any>('http://localhost:8080/ttps-spring/login',body).subscribe(
      (response)=> {
        if (response['status'] == 200){
          sessionStorage.setItem('id',response['entity']['id']['chars']);
          console.log(sessionStorage.getItem('id'))
          this.router.navigateByUrl('home');
        }
        else{
          alert('El usuario i/o contraseña son incorrectos.')
          this.router.navigateByUrl('');
          
        }
      })
  }

  createUser(register: NgForm): boolean {
    this.http
      .post<any>(`${environment.url}/users`, register.value)
      .subscribe((response) => {
        console.log(response);
        this.elEstado = true;
      },
      (err: HttpErrorResponse) => {
        console.log('estado de error: ', err.status);
      }
      );
      return this.elEstado;
  }

  editUser(usuario: NgForm): Observable<Usuario> {
    let id = sessionStorage.getItem('id');
    return this.http.put<Usuario>(
      `${environment.url}/users/${id}`,
      usuario.value,
      {
        headers: { token: '1123456' },
      }
    );
}
}


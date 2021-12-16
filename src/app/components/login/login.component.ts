import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private usuario: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onSubmit(login: NgForm) {
    this.usuario.autenticacion(login).subscribe(
      (usuario) => {
        //almacenamiento en sesion
        // this.error = false;
        // sessionStorage.setItem('id', usuario.id);
        // sessionStorage.setItem('username', usuario.username);
        this.router.navigateByUrl('home-servicios');

      },
      (err: HttpErrorResponse) => {
        console.log('estado de error: ', err.status, typeof err.status);
        // this.error = true;
      }
    );
  }

}

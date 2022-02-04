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
  enviado:Boolean = false;
  constructor(
    private usuario: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  onSubmit(login: NgForm) {
    console.log(this.enviado)
    this.enviado = this.usuario.autenticacion(login)

    
  }

}

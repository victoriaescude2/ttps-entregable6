import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  enviado:Boolean = false;
  fallo:Boolean = false;
  nombre: String = "";
  apellido: String = "";
  password: String = "";
  email: String = "";
  constructor(
    private userService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.enviado=false;
    this.userService.recuperarData()
    .subscribe(
      (usuario) => {
        this.apellido= usuario.apellido;
        this.nombre= usuario.nombre;
        this.password= usuario.password;
        this.email= usuario.email;
      }
    );
  }

  onSubmit(usuario: NgForm) {
    let envio= this.comprobarCampos(usuario);

    this.userService.editUser(envio).subscribe(
      () => {
        //actualiza los datos
        this.enviado=true;
        this.fallo = false;
      },
      (err: HttpErrorResponse) => {
        this.fallo = true;
        console.log('estado de error: ', err.status, typeof err.status);
        this.fallo = true;
        this.enviado = false;
      }
    );
  }

  comprobarCampos(data: NgForm): NgForm{
    if (data.value.apellido==""){
      data.value.apellido= this.apellido;
    }
    if (data.value.nombre==""){
      data.value.nombre= this.nombre;
    }
    if (data.value.password==""){
      data.value.password= this.password;
    }
    if (data.value.email==""){
      data.value.email= this.email;
    }
    return data;
  }

}

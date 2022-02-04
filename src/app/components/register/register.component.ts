import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { NgForm,Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  fallo: boolean = false;
  constructor(private usuario: UsuarioService, private router: Router){}


  ngOnInit(): void {
  }

  onSubmit(register: NgForm) {  
    this.usuario.createUser(register).subscribe(
      () => {
        this.fallo=false;
        this.router.navigateByUrl('');
      },
      (err: HttpErrorResponse) => {
        this.fallo = true;
        console.log('estado de error: ', err.status, typeof err.status);
      }
    );
  }



}

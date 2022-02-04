import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { NgForm,Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';

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
      this.fallo = this.usuario.createUser(register);
  }



}

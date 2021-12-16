import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private usuario: UsuarioService){}

  // usuario: Usuario[] = [{'nombre':'Victoria', 'apellido':'Escudero', 'username':'vescudero','email':'vescudero@gmail.com',
  // 'password':'vescudero'}];


  ngOnInit(): void {
  }

  onSubmit(register: NgForm) {
    console.log(register.value);
    if (register.valid) {
      this.usuario.createServicio(register);
    }
  }

}

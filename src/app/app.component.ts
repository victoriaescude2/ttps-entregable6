import { Component } from '@angular/core';
import { UsuarioService } from './service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema de reserva de servicios';
  constructor(private usuarioService: UsuarioService){}

  isLogin(){
    return this.usuarioService.isLogin();
  }

  logOut(){
    this.usuarioService.logOut();
  }
}

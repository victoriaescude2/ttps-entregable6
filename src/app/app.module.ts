import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HomeServiciosComponent } from './components/home-servicios/home-servicios.component';
import { NewServicioComponent } from './components/new-servicio/new-servicio.component';
import { ListServiciosComponent } from './components/list-servicios/list-servicios.component';
import { BorrarServicioComponent } from './components/borrar-servicio/borrar-servicio.component';
import { EditServicioComponent } from './components/edit-servicio/edit-servicio.component';
import { UsuarioService } from './service/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EditUserComponent,
    HomeComponent,
    HomeServiciosComponent,
    NewServicioComponent,
    ListServiciosComponent,
    BorrarServicioComponent,
    EditServicioComponent,
    HomeComponent,
    HomeServiciosComponent,
    EditUserComponent,
    ListServiciosComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UsuarioService], 
  bootstrap: [AppComponent],
})
export class AppModule {}

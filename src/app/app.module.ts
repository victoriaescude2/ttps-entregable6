import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { EditUserComponent } from './components/editUser/editUser.component';
import { UsuarioserviceService } from './services/usuarioservice.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/homefoodtrucker/homefoodtrucker.component';
import { HomeServicioComponent } from './components/homeorganizador/homeorganizador.component';
import { NewfServicioComponent } from './components/newfoodtruck/newfoodtruck.component';
import { FoodtruckService } from './services/foodtruck.service';
import { ListServiciosComponent } from './components/listfoodtrucks/listfoodtrucks.component';
import { BorrarServicioComponent } from './components/borrarServicio/borrarServicio.component';
import { EditServicioComponent } from './components/edit-food-truck/edit-food-truck.component';
import { HomeComponent } from './components/home/home.component';
import { HomeServiciosComponent } from './components/home-servicios/home-servicios.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListServiciosComponent } from './components/list-servicios/list-servicios.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EdituserComponent,
    HomeServicioComponent,
    HomeServicioComponent,
    NewServicioComponent,
    ListServicioComponent,
    BorrarServicioComponent,
    EditServicioComponent,
    HomeComponent,
    HomeServiciosComponent,
    EditUserComponent,
    ListServiciosComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UsuarioserviceService, FoodtruckService],
  bootstrap: [AppComponent],
})
export class AppModule {}

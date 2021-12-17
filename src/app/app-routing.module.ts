import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { HomeServiciosComponent } from './components/home-servicios/home-servicios.component';
import { ListServiciosComponent } from './components/list-servicios/list-servicios.component';
import { LoginComponent } from './components/login/login.component';
import { NewServicioComponent } from './components/new-servicio/new-servicio.component';
import { RegisterComponent } from './components/register/register.component';
import { BorrarServicioComponent } from './components/borrar-servicio/borrar-servicio.component';
import { EditServicioComponent } from './components/edit-servicio/edit-servicio.component';


const routes: Routes = [
  { path: '', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'edit-user',
    component: EditUserComponent,
  },
  {
    path: 'home-servicio',
    component: HomeServiciosComponent,
  },
  {
    path: 'new-servicio',
    component: NewServicioComponent,
  },
  {
    path: 'list-servicio',
    component: ListServiciosComponent,
  },
  {
    path: 'borrar-servicio',
    component: BorrarServicioComponent,
  },
  {
    path: 'edit-servicio',
    component: EditServicioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

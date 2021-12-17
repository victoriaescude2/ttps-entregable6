import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-borrar-servicio',
  templateUrl: './borrar-servicio.component.html',
  styleUrls: ['./borrar-servicio.component.css']
})

export class BorrarServicioComponent implements OnInit {

  constructor(private servicioService: ServicioService,
    private router: Router) { }

  ngOnInit(): void {
    this.servicioService.deleteService("1");
  }
}

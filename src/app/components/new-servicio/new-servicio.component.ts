import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-new-servicio',
  templateUrl: './new-servicio.component.html',
  styleUrls: ['./new-servicio.component.css']
})
export class NewServicioComponent implements OnInit {
  enviado: Boolean =false;
  error: Boolean=false;
  constructor(private servicio: ServicioService) {}

  ngOnInit(): void {
  }

  // {"dueño":{ "id":1} }
  onSubmit(sv: NgForm) {
    let estado= this.servicio.createService(sv);
  }
}
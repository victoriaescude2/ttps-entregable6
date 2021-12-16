export class Servicio {
    
    public nombre: string;
    public tipo: string;
    public descripcion: string;
    public url: string;
    public redes: string;
 
   constructor (nombre: string, tipo: string, descripcion: string, url: string, redes: string){ 
    this.nombre = nombre;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.url = url;
    this.redes = redes;
 } 

}

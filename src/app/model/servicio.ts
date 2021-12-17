export class Servicio {
    
    public nombre: string;
    public tipo: string;
    public descripcion: string;
    public urlWeb: string;
    public redes: string;
 
   constructor (nombre: string, tipo: string, descripcion: string, urlWeb: string, redes: string){ 
    this.nombre = nombre;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.urlWeb = urlWeb;
    this.redes = redes;
 } 

}

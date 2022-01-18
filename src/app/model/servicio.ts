export class Servicio {
    public id: string;
    public nombre: string;
    public tipo: any;
    public descripcion: string;
    public urlWeb: string;
    public redes: string;
 
   constructor (id: string, nombre: string, tipo: any, descripcion: string, urlWeb: string, redes: string){ 
       this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.urlWeb = urlWeb;
    this.redes = redes;
 } 

}

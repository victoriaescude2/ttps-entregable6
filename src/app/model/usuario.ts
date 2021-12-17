export class Usuario {

    public id: string;
    public nombre: string ;
    public apellido: string ;
    public username: string ;
    public email: string ;
    public password: string ;

     constructor (id: string, nombre: string,  apellido: string,  username: string,  email: string,  password: string){ 
         this.id = id;
         this.nombre = nombre;
         this.apellido = apellido;
         this.username = username;
         this.email = email;
         this.password = password;
 
    } 

    

    

}


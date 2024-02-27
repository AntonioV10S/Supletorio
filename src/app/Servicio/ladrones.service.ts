import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LadronesService {

  constructor(private http:HttpClient ) { }

  obtenerLadron(){
    return this.http.get('http://127.0.0.1:8000/api/ladron',{

    })
  }

  registrarLadron(nombre:string, apellido:string, cedula:string, delito:string, id_policia:number){
    return this.http.post('http://127.0.0.1:8000/api/ladron',{
      nombre:nombre,
      apellido:apellido,
      cedula:cedula,
      delito:delito,
      id_policia:id_policia

    }
    )
  }
}

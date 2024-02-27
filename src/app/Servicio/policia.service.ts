import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoliciaService {


  constructor(private http:HttpClient ) { }

  obtenerPolicia(){
    return this.http.get('http://127.0.0.1:8000/api/policia',{

    })
  }

  registrarPolicia(nombre:string, apellido:string, cedula:string, rango:string){
    return this.http.post('http://127.0.0.1:8000/api/policia',{
      nombre:nombre,
      apellido:apellido,
      cedula:cedula,
      rango:rango
    }
    )
  }
}

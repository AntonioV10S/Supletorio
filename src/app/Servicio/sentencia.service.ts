import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentenciaService {

  constructor(private http:HttpClient ) { }

  obtenerSentencia(){
    return this.http.get('http://127.0.0.1:8000/api/sentencia',{

    })
  }

  registrarSentencia(condena:number, multa:number, id_ladron:number){
    return this.http.post('http://127.0.0.1:8000/api/sentencia',{
      condena:condena,
      multa:multa,
      id_ladron:id_ladron
    }
    )
  }
}

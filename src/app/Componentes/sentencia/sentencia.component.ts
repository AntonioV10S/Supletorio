import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { SentenciaService } from '../../Servicio/sentencia.service';
import { LadronesService } from '../../Servicio/ladrones.service';

@Component({
  selector: 'app-sentencia',
  standalone: true,
  imports: [],
  templateUrl: './sentencia.component.html',
  styleUrl: './sentencia.component.css'
})
export class SentenciaComponent {

constructor(private sentencia: SentenciaService, private ladron:LadronesService){}

  sentencias:any
  ladrones:any

  ngOnInit(){
    this.cargarSentencia(), this.cargarLadron();
  }

  cargarSentencia() {
    this.sentencia.obtenerSentencia().subscribe(
      {
      next: (datos: any) => {
        this.sentencias = datos.sentencia;
      },
      error: (e) => {

      },
    });
  }

  cargarLadron() {
    this.ladron.obtenerLadron().subscribe(
      {
      next: (datos: any) => {
        this.ladrones = datos.ladron;
      },
      error: (e) => {

      },
    });
  }

  storeSentencia(id_ladron:any, condena:any, multa:any) {
    this.sentencia.registrarSentencia(condena.value, multa.value, id_ladron.value).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Correct',
          text: 'Datos guardados correctamente',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed || result.isDismissed) {
            window.location.reload();
          }
        });
      },
      error: (e) => {
        Swal.fire({
          title: 'Incorrect!',
          text: 'Datos incorrectos',
          icon: 'error',
          confirmButtonText: 'Error',
        });
      },
    });
  }


}

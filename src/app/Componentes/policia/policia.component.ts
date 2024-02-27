import { Component } from '@angular/core';
import { PoliciaService } from '../../Servicio/policia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-policia',
  standalone: true,
  imports: [],
  templateUrl: './policia.component.html',
  styleUrl: './policia.component.css'
})
export class PoliciaComponent {
  constructor(private policia: PoliciaService){}

  policias: any;
  ngOnInit() {
    this.cargarPolicia();
  }
  cargarPolicia() {
    this.policia.obtenerPolicia().subscribe(
      {
      next: (datos: any) => {
        this.policias = datos.policia;
      },
      error: (e) => {

      },
    });
  }

  storePolicia(nombre: any, apellido: any, cedula:any, rango:any) {
    this.policia.registrarPolicia(nombre.value, apellido.value, cedula.value, rango.value).subscribe({
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

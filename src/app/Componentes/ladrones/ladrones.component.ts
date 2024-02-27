import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { LadronesService } from '../../Servicio/ladrones.service';
import { PoliciaService } from '../../Servicio/policia.service';

@Component({
  selector: 'app-ladrones',
  standalone: true,
  imports: [],
  templateUrl: './ladrones.component.html',
  styleUrl: './ladrones.component.css'
})
export class LadronesComponent {
  constructor(private ladron: LadronesService, private policia:PoliciaService){}
  policias:any
  ladrones: any;

  ngOnInit() {
    this.cargarPolicia(), this.cargarLadron();
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

  storeLadron(id_policia:any, nombre: any, apellido: any, cedula:any, delito:any) {
    this.ladron.registrarLadron(nombre.value, apellido.value, cedula.value, delito.value, id_policia.value).subscribe({
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

import { Routes } from '@angular/router';
import { PoliciaComponent } from './Componentes/policia/policia.component';
import { LadronesComponent } from './Componentes/ladrones/ladrones.component';
import { SentenciaComponent } from './Componentes/sentencia/sentencia.component';

export const routes: Routes = [
  {
    path: 'policia', component: PoliciaComponent
  },
  {
    path:'ladrones', component: LadronesComponent
  },
  {
    path:'sentencia', component: SentenciaComponent
  }

];

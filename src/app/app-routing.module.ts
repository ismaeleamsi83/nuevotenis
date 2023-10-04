import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { JugadoresComponent } from './jugadores/jugadores.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'jugadores', component: JugadoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

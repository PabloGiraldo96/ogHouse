import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlorComponent } from './flor/flor.component';
import { DestiladosComponent } from './destilados/destilados.component';
import { ExtraccionesComponent } from './extracciones/extracciones.component';
import { ComestiblesComponent } from './comestibles/comestibles.component';
import { ProductosComponent } from './productos/productos.component';



const routes: Routes = [
      {path: '', component: HomeComponent, pathMatch: 'full'}, 
      {path: 'flores', component: FlorComponent}, 
      {path: 'destilados', component: DestiladosComponent}, 
      {path: 'extracciones', component: ExtraccionesComponent},
      {path: 'comestibles', component: ComestiblesComponent},
      {path: 'productos', component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

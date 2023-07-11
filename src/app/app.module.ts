import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FlorComponent } from './flor/flor.component';
import { DestiladosComponent } from './destilados/destilados.component';
import { ComestiblesComponent } from './comestibles/comestibles.component';
import { ProductosComponent } from './productos/productos.component';
import { ExtraccionesComponent } from './extracciones/extracciones.component';
import { EventosComponent } from './eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    FlorComponent,
    DestiladosComponent,
    ComestiblesComponent,
    ProductosComponent,
    ExtraccionesComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Destilados } from '../interfaces/Destilados';

@Component({
  selector: 'app-destilados',
  templateUrl: './destilados.component.html',
  styleUrls: ['./destilados.component.css']
})
export class DestiladosComponent {
public destilado1: Destilados = {
    nombre: 'Friendly Arms',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-destilado-friendlyarms.jpg?alt=media&token=ac3bf781-8ed4-434d-bae6-2d82f2e4d452'],
    descripcion: 'Destilado Friendly Arms sabor sativa citrica',
    precio: 75000
}
public destilado2: Destilados = {
    nombre: 'Rove Waui',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-destilado-rove-waui.jpg?alt=media&token=31116fbe-3ec4-4f93-ba67-33aae6ff9d43'],
    descripcion: 'Destilado Rove waui sabor indica citrica',
    precio: 75000
}
public destilado3: Destilados = {
    nombre: 'Runtz Weedcake',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-destilado-runtz-weedingcake.jpg?alt=media&token=fb3f7773-b3ae-4526-be56-11cabd3503f1'],
    descripcion: 'Destilado Runtz hibrida sabor terroso',
    precio: 75000
}
public destilado4: Destilados = {
    nombre: 'Push Laconfidential',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-destilado-push-laconfidential.jpg?alt=media&token=f090fb24-4c9d-4173-9633-dd3df6ff1fa6'],
    descripcion: 'Destilado Push hibrida sabor citrico',
    precio: 75000
}
public destilado5: Destilados = {
    nombre: 'Push Bluedream',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-destilado-push-bluedream.jpg?alt=media&token=0605d3af-c872-43a2-aefe-936358324172'],
    descripcion: 'Destilado Push indica',
    precio: 75000
}

public destilados: Destilados[] = [this.destilado2, this.destilado3, this.destilado4, this.destilado5]

  constructor() {console.log(this.destilados) }
}

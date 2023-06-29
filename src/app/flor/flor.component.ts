import { Component, OnInit } from '@angular/core';
import { Flores } from '../interfaces/Flores';

@Component({
  selector: 'app-flor',
  templateUrl: './flor.component.html',
  styleUrls: ['./flor.component.css']
})
export class FlorComponent {
public flor1: Flores = {
    nombre: 'Tangerine Haze',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-flor.jpg?alt=media&token=b06c99f4-d9c2-4173-89f1-dbe103e9eaef'],
    descripcion: 'Sativa con sabor critrico',
    precio: 6000
}
public flor2: Flores = {
    nombre: 'Gorilla Glue',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-flor2.jpg?alt=media&token=1cca9899-b08e-40b6-8f7e-9c99917c6aee'],
    descripcion: 'Indica con sabor terroso',
    precio: 6000
}
public flor3: Flores = {
    nombre: 'Hard diesel',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-flor3.jpg?alt=media&token=52f3d001-efed-44dc-a905-ce7372145085'],
    descripcion: 'Hibrida sabor terroso',
    precio: 17000
}
public flor4: Flores = {
    nombre: 'Lima Haze',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-flor5.jpg?alt=media&token=cb361d3f-afa3-403f-8ed1-668f95e1fac0'],
    descripcion: 'Sativa sabor dulce',
    precio: 17000
}

public flores: Flores[] = [this.flor1, this.flor2, this.flor3, this.flor4]

  constructor() {console.log(this.flores) }
}

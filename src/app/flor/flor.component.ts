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
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-flor.jpg?alt=media&token=6dc1c2ce-12f3-41cd-881f-27fa3accc296'],
    descripcion: 'Sativa con sabor critrico',
    precio: 6000
}
public flor2: Flores = {
    nombre: 'Gorilla Glue',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-flor2.jpg?alt=media&token=11231342-bdc7-4c84-8b4a-21827133b319'],
    descripcion: 'Indica con sabor terroso',
    precio: 6000
}
public flor3: Flores = {
    nombre: 'Hard diesel',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-flor3.jpg?alt=media&token=a977eca1-138b-447d-ac09-32cbbbc8b7e9'],
    descripcion: 'Hibrida sabor terroso',
    precio: 17000
}

public flores: Flores[] = [this.flor1, this.flor2, this.flor3]

  constructor() {console.log(this.flores) }
}

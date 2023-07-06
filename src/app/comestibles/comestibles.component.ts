import { Component, OnInit } from '@angular/core';
import { Comestibles } from '../interfaces/Comestibles';

@Component({
  selector: 'app-comestibles',
  templateUrl: './comestibles.component.html',
  styleUrls: ['./comestibles.component.css']
})
export class ComestiblesComponent {

public comestible1: Comestibles = {
    nombre: 'Comestible Corned',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-comestible.jpg?alt=media&token=0936f93c-7e6f-428c-aed6-1e46eaf017d4'],
    descripcion: 'THC Infused cones',
    precio: 75000
}
public comestible2: Comestibles = {
    nombre: 'Comestible Corned',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-comestible.jpg?alt=media&token=0936f93c-7e6f-428c-aed6-1e46eaf017d4'],
    descripcion: 'THC Infused cones',
    precio: 75000
}
public comestible3: Comestibles = {
    nombre: 'Comestible Corned',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-comestible.jpg?alt=media&token=0936f93c-7e6f-428c-aed6-1e46eaf017d4'],
    descripcion: 'THC Infused cones',
    precio: 75000
}
public comestible4: Comestibles = {
    nombre: 'Comestible Corned',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-comestible.jpg?alt=media&token=0936f93c-7e6f-428c-aed6-1e46eaf017d4'],
    descripcion: 'THC Infused cones',
    precio: 75000
}

public comestibles: Comestibles[] = [this.comestible1, this.comestible2, this.comestible3]

  constructor() {console.log(this.comestibles) }

}

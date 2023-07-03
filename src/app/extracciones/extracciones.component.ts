import { Component, OnInit } from '@angular/core';
import { Extracciones } from '../interfaces/Extracciones';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-extracciones',
  templateUrl: './extracciones.component.html',
  styleUrls: ['./extracciones.component.css']
})
export class ExtraccionesComponent {

public extraccion1: Extracciones = {
    nombre: 'Bubble Fruit',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-extraccion-bubblefruit.jpg?alt=media&token=be9c08ad-ea53-4eee-ba9f-93a1b0021dc0'],
    descripcion: 'Destilado Friendly Arms sabor sativa citrica',
    precio: 75000
}
public extraccion2: Extracciones = {
    nombre: 'Mango Haze',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-extraccion-mangohaze.jpg?alt=media&token=4fbec186-fd29-4e97-8fa3-dad60c19e4ab'],
    descripcion: 'Destilado Friendly Arms sabor sativa citrica',
    precio: 75000
}
public extraccion3: Extracciones = {
    nombre: 'Skunk OG',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-extraccion-skunkog.jpg?alt=media&token=220f4a98-8b93-45e5-b0ed-779296d3b3e4'],
    descripcion: 'Destilado Friendly Arms sabor sativa citrica',
    precio: 75000
}
public extraccion4: Extracciones = {
    nombre: 'Red Mandarine',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-extraccion-redmandarinejpg.jpg?alt=media&token=a5cad025-36e5-4f36-b8dd-fdda520c403b'],
    descripcion: 'Destilado Friendly Arms sabor sativa citrica',
    precio: 75000
}

public tiempoTransicion: number = 2000;

public extracciones: Extracciones[] = [this.extraccion1, this.extraccion2, this.extraccion3, this.extraccion4]

  constructor() {console.log(this.extracciones) }

}

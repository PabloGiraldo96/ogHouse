import { Component, OnInit } from '@angular/core';
import { Productos } from '../interfaces/Productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

public producto1: Productos = {
    nombre: 'Tratamiento Psilocibina',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-psilocibina.jpeg?alt=media&token=8508d8e5-5306-4f50-8a75-ddf43a81527e'],
    descripcion: 'Psilocibina medicine pills',
    precio: 75000
}
public producto2: Productos = {
    nombre: 'Tratamiento Psilocibina',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-psilocibina.jpeg?alt=media&token=8508d8e5-5306-4f50-8a75-ddf43a81527e'],
    descripcion: 'Psilocibina medicine pills',
    precio: 75000
}
public producto3: Productos = {
    nombre: 'Tratamiento Psilocibina',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-psilocibina.jpeg?alt=media&token=8508d8e5-5306-4f50-8a75-ddf43a81527e'],
    descripcion: 'Psilocibina medicine pills',
    precio: 75000
}

public productos : Productos[] = [this.producto1, this.producto2, this.producto3]

  constructor() { console.log(this.productos)}

}

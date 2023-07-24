import { Component, OnInit } from '@angular/core';
import { Productos } from '../interfaces/Productos';
import { ProductosService } from '../services/productos.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent implements OnInit {

public productos : Productos[] = []

  constructor(public servicio: ProductosService){
}

ngOnInit(): void {
  this.servicio.buscarProductos().subscribe((respuesta)=>{
  console.log(respuesta)
  this.productos = respuesta.Productos
  })

  gsap.from(".productos", { opacity: 0, duration: 3, ease: "ease(2, 1.5, true)", y: 280}); 

}
}

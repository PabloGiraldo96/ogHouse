import { Component, OnInit } from '@angular/core';
import { Extracciones } from '../interfaces/Extracciones';
import { ExtraccionesService } from '../services/extracciones.service';
import { gsap } from 'gsap';



@Component({
  selector: 'app-extracciones',
  templateUrl: './extracciones.component.html',
  styleUrls: ['./extracciones.component.css']
})
export class ExtraccionesComponent implements OnInit{


public extracciones: Extracciones[] = []

  constructor(public servicio: ExtraccionesService) {}

ngOnInit(): void {
this.servicio.buscarExtracciones().subscribe((respuesta)=> {
this.extracciones = respuesta.extraccion
console.log(this.extracciones) 
  })  

   gsap.from(".extracciones", { opacity: 0, duration: 3, ease: "ease(2, 1.5, true)", y: 280}); 

  }
}

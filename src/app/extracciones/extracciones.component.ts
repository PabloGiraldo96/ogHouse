import { Component, OnInit } from '@angular/core';
import { Extracciones } from '../interfaces/Extracciones';
import { ExtraccionesService } from '../services/extracciones.service';
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
  }
}

import { Component, OnInit } from '@angular/core';
import { Destilados } from '../interfaces/Destilados';
import { DestiladosService } from '../services/destilados.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-destilados',
  templateUrl: './destilados.component.html',
  styleUrls: ['./destilados.component.css']
})

export class DestiladosComponent implements OnInit{

public destilados: Destilados[] = []

constructor(public servicio: DestiladosService){
}

ngOnInit(): void {
  this.servicio.buscarDestilados().subscribe((respuesta)=> {console.log(respuesta)
  this.destilados = respuesta.destilado})

  gsap.from(".destilados", { opacity: 0, duration: 3, ease: "ease(2, 1.5, true)", y: 280}); 
  
}
}

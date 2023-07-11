import { Component, OnInit } from '@angular/core';
import { Comestibles } from '../interfaces/Comestibles';
import { ComestiblesService } from '../services/comestibles.service';

@Component({
  selector: 'app-comestibles',
  templateUrl: './comestibles.component.html',
  styleUrls: ['./comestibles.component.css']
})
export class ComestiblesComponent implements OnInit{

public comestibles: Comestibles[] = []

  constructor(public servicio: ComestiblesService) { 
}

ngOnInit(): void {
this.servicio.buscarComestibles().subscribe((respuesta)=>{
this.comestibles = respuesta.Comestible 
console.log(this.comestibles)
  }) 
  }
}


import { Component, OnInit } from '@angular/core';
import { Destilados } from '../interfaces/Destilados';
import { DestiladosService } from '../services/destilados.service';

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
  }
}

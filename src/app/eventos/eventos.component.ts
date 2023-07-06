import { Component, OnInit } from '@angular/core';
import { Eventos } from '../interfaces/Eventos';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent{
public evento1: Eventos = {
    nombre: 'Og Wild 1',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-evento1.jpg?alt=media&token=dbaa618c-6c01-4385-b68f-3a5cf6db9ebb'],
    descripcion: 'Primer evento',
    precio: 75000
}

public evento2: Eventos = {
    nombre: 'Og Wild 2',  
    foto:['https://firebasestorage.googleapis.com/v0/b/oghouse2023-73b37.appspot.com/o/og-evento2.jpg?alt=media&token=b6a91528-ad56-4e8c-9b3a-e43de3ee6c49'],
    descripcion: 'Segundo evento',
    precio: 75000
}

public eventos: Eventos[] = [this.evento1, this.evento2]

  constructor() { console.log(this.eventos)}

}

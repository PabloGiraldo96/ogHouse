import { Component, OnInit } from '@angular/core';
import { Flores } from '../interfaces/Flores';
import {FloresService} from '../services/flores.service'

@Component({
  selector: 'app-flor',
  templateUrl: './flor.component.html',
  styleUrls: ['./flor.component.css']
})

export class FlorComponent implements OnInit {

public flores: Flores[] = []

constructor(public servicio: FloresService){
}

ngOnInit(): void {
  this.servicio.buscarFlores().subscribe((respuesta)=>{
  this.flores = respuesta.flores 
  console.log(this.flores)
  })  
  }
}
